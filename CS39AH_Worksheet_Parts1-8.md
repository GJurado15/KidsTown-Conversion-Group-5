# KidsTown Website -- Architecture Investigation Worksheet (Parts 1--8)

**Team:** Group 5
**Repository:** https://github.com/GJurado15/KidsTown-Conversion-Group-5
**Live replacement:** https://gjurado15.github.io/KidsTown-Conversion-Group-5/

---

## Part 1: What is KidsTown?

KidsTown is a children's educational website created in ~1998 by students at the University of Colorado at Denver as part of a Senior Design Project course. It was a collaboration with the Tattered Cover Book Store under the "Children's Literacy Project" initiative. Over 100 students participated.

The site is designed for elementary school-aged children and promotes literacy through interactive stories, puzzles, quizzes, and games. It is organized as a virtual "town" where children visit different themed locations ("rooms"), each offering different activities.

**The 9 rooms and what they contain:**

| Room | Purpose | Activities |
|------|---------|------------|
| **Home** | Main landing page | Interactive clickable town map linking to all rooms |
| **City Park** | Interactive fiction | An 18-page branching adventure story that uses the child's name |
| **City Hall** | Detective stories | Two branching detective cases ("The Bungled Bank Burglary" and "The Case of the Alien Photo") where the child collects clues and solves a case |
| **Library** | U.S. geography | Clickable U.S. map, 7 region overview pages, 51 individual state fact pages (capital, bird, flower, tree, song, etc.), plus word search puzzles, mad-libs stories, and fill-in-the-blank quizzes for selected states |
| **Zoo** | Animal encyclopedia | 4 world regions (Africa, Australia, Ocean, Polar) with animal information, a world map, and a per-region "ZooKeeper's Challenge" quiz |
| **Museum** | Science and art | A Color Exhibition, a 6-page Rainbow story, and a Planetarium with Basic/Advanced solar system picture quizzes |
| **School** | Word games and farming | Hangman-style "Word Fun," an anagram "Scramble" game (both with 3 difficulty levels), and a "Farm Field Trip" encyclopedia with 7 animals and 7 crops |
| **Toy Store** | Riddles and poems | 7 interactive riddles (answer revealed on click), 5 "shape poems" (poems formatted in the shape of the object they describe), and a 3-step bonus math problem |
| **Township** | World culture/geography | 4 "Wonders of the World" pages (Zeus, Pyramids, Great Wall, Taj Mahal) each with a 3-part quiz, and a 6-round "Country Shape Matching" game where children match country outlines to names using progressive clues |

---

## Part 2: How does the legacy system work?

### 2.1 The CGI dispatcher pattern

The entire legacy site runs through a single Perl CGI script: `cgi-bin/kt.cgi`. Every page request goes to this one script with a `?KEY=NNNN` query parameter. The workflow is:

1. **Request arrives** (e.g., `kt.cgi?KEY=6010&state=5`)
2. `kt.cgi` reads the `KEY` value and looks it up in `kt.db` (a flat-file database)
3. `kt.db` returns one or more lines, each naming a Perl script to run and arguments to pass
4. `kt.cgi` runs each script in order via Perl's `eval` -- each script `print`s raw HTML
5. The combined HTML output is sent back to the browser wrapped in `<HTML>...</HTML>`

**Example flow for the Home page (KEY=1000):**
The database entry for `#1000#` lists scripts like `mainPgHdr.pl`, `ktmap.pl`, `mainPgTxt.pl`, `navbar.pl`, `mainPgFtr.pl` -- each one prints a section of the page.

### 2.2 Configuration (`kt.ini`)

`kt.ini` maps logical names to absolute filesystem paths on the original server (e.g., `homescripts=/home/users/web/b2656/ipg.drjodypaulcom/kidstown/scripts/home`). It also maps graphics directories to HTTP URLs (e.g., `homegraphics=http://kidstown.mine.nu/graphics/home`). This allowed the scripts to use placeholder tokens like `$ktini{homegraphics}` for image paths.

### 2.3 The .pl files -- mostly templates, not programs

Despite the `.pl` extension, the vast majority of the 223 Perl scripts are not real programs. They are static HTML wrapped in a `print` heredoc. For example, `scripts/home/mainPgHdr.pl`:

```perl
#!/usr/bin/perl
print<<END_OF_HERE_DOC;
<HEAD><TITLE>KidsTown</TITLE></HEAD>
<BODY BGCOLOR="#EEE2B4" TEXT="BLACK">
<DIV ALIGN="CENTER">
<B><FONT SIZE=+2>Welcome to<BR></FONT>
<FONT SIZE=+4>KidsTown</FONT></B>
</DIV>
END_OF_HERE_DOC
```

The only "dynamic" aspects are:
- **Token substitution**: variables like `$ktini{homegraphics}` get replaced with paths from `kt.ini`
- **CGI parameter threading**: values like a player's name or score get threaded through every URL as query parameters (since CGI is stateless, there is no other way to remember anything between pages)
- **Stateless duplication**: In City Hall and Township, the legacy system handled "which clues has the player seen?" by creating a separate near-identical script for every possible combination of seen/unseen clues -- roughly 30 scripts that differ only in which clue images are visible. This was a workaround for CGI's inability to store state.

### 2.4 Data files

Flat text files in `data/` hold the actual content:
- `data/citypark/page1` through `page18` -- the story text for each page
- `data/library/b_state_datafile.txt` -- a structured record for all 50 states + D.C.
- `data/school/e_data1.txt`, `e_data2.txt`, `e_data3.txt` -- word lists for the word games (3 difficulty levels)
- `data/museum/ss1.dat`, `ss2.dat` -- solar system quiz questions
- `data/township/zeus.txt`, `pyram.txt`, `wall.txt`, `india.txt` -- wonder-of-the-world facts

### 2.5 Graphics

458 image files (318 GIF, 121 JPG, ~6.1 MB total) organized by room under `graphics/`. These include navigation buttons, maps, animal photos, story illustrations, state flags, country outlines, etc.

---

## Part 3: What are the problems with the legacy system?

1. **Cannot run on modern hosting**: The site requires a Perl CGI-capable web server. GitHub Pages (and most modern static hosts) cannot execute Perl scripts. The original server (`kidstown.mine.nu`) is long offline.

2. **Server-dependent routing**: Every single page request must pass through `kt.cgi`. There are no standalone HTML files a browser can open directly. Without the CGI server, the site is completely non-functional.

3. **Hardcoded server paths**: `kt.ini` contains absolute paths like `/home/users/web/b2656/ipg.drjodypaulcom/kidstown/...` that only work on the original server.

4. **Stateless CGI workarounds create massive duplication**: City Hall and Township contain ~30+ nearly identical scripts that only differ in which UI elements are visible, solely because CGI cannot remember whether a player has already seen a clue. This makes maintenance very difficult.

5. **1990s HTML**: The markup uses deprecated elements (`<FONT>`, `<CENTER>`, `BGCOLOR` attributes, etc.) and lacks semantic structure, `<meta charset>`, or any CSS.

6. **No separation of content and presentation**: Story text, quiz questions, and facts are embedded directly inside Perl `print` statements, making it hard to update content without editing code.

7. **Security concerns**: `kt.cgi` uses Perl's `eval` to dynamically execute script files -- a risky pattern that could enable code injection if inputs were not carefully controlled.

---

## Part 4: What does the replacement need to do?

The replacement must appear to an end user to behave like the existing site. Specifically:

### Functional requirements (from the legacy behavior):
- Display a town map with clickable regions linking to 9 rooms
- Render a shared navigation bar with icon buttons for every room
- Support all interactive activities: branching stories, quizzes (multiple choice, true/false, fill-in, word-building), word games (hangman, anagram), word search puzzles, mad-libs, riddles with reveal, and a country-matching game
- Display state facts, animal facts, farm facts, and cultural/historical content
- Personalize the City Park story with the visitor's name
- Track progress within activities (which clues seen in City Hall, which quiz questions answered in Museum, etc.)
- Display all original images correctly

### Non-functional requirements (from the assignment constraints):
- No server-side processing
- No Perl or CGI dependency
- Deployable on GitHub Pages
- Avoid frameworks unless strongly justified
- Understandable and maintainable by future student developers
- Reasonably straightforward to modify and extend

---

## Part 5: What architectural alternatives exist?

### Option A: One static HTML file per legacy page (brute-force conversion)

**How it works:** Convert each of the 223 `.pl` scripts into a standalone `.html` file. No JavaScript needed for most pages.

**Pros:** Extremely simple; every page is self-contained; zero JavaScript dependencies; easy to understand.

**Cons:** Massive duplication (e.g., the 30+ clue-state variants in City Hall and Township would each still be separate files); updating shared content (nav bar, styles) requires editing hundreds of files; no interactivity for quizzes/games (would need JS anyway); difficult to maintain.

### Option B: Data-driven templates with vanilla JavaScript (chosen approach)

**How it works:** Create one generic HTML page per activity type (e.g., one `state.html` for all 51 states) that loads its content from a JavaScript data file (e.g., `state-data.js`) using URL query parameters (e.g., `?state=5`). Shared elements (nav bar, styles) live in shared files.

**Pros:** Eliminates duplication (223 scripts become ~63 pages + 15 data files); content is separated from presentation; easy to add a new state/riddle/wonder by editing a data file; no build step; no framework; works directly on GitHub Pages.

**Cons:** Requires JavaScript to be enabled; pages render client-side (no content in initial HTML); slightly more complex than pure static HTML.

### Option C: Static Site Generator (e.g., Jekyll, Hugo, Eleventy)

**How it works:** Write templates and content files; a build tool generates static HTML at deploy time. GitHub Pages has built-in Jekyll support.

**Pros:** Clean separation of content and templates; output is plain HTML (works without JS); mature ecosystem.

**Cons:** Adds a build dependency (students need to install/run the tool); templates use a domain-specific language (Liquid, Nunjucks, etc.) that students must learn; interactive games still need JavaScript; more complex project structure; harder for future students to pick up without documentation.

### Option D: Single Page Application with a framework (React, Vue, etc.)

**How it works:** Build the entire site as a JavaScript application with a framework handling routing, state, and rendering.

**Pros:** Powerful state management; component reuse; modern development patterns.

**Cons:** Requires a build toolchain (Node.js, npm, bundler); significant learning curve; framework knowledge becomes a prerequisite for future maintainers; overkill for what is fundamentally a content site with light interactivity; violates the assignment's constraint to avoid frameworks without strong justification.

---

## Part 6: Evaluation of alternatives

| Criterion | A: Brute-force HTML | B: Data-driven vanilla JS | C: Static site generator | D: SPA framework |
|-----------|---------------------|--------------------------|-------------------------|-----------------|
| No server-side processing | Yes | Yes | Yes (after build) | Yes (after build) |
| No Perl/CGI dependency | Yes | Yes | Yes | Yes |
| Deployable on GitHub Pages | Yes | Yes | Yes | Yes |
| Avoids frameworks | Yes | Yes | Yes | No |
| Maintainable by students | Medium (too many files) | High (clear data/template split) | Medium (must learn SSG) | Low (must learn framework) |
| Easy to extend | Low (copy-paste a file) | High (add entry to data file) | High (add content file) | High (add component) |
| Eliminates legacy duplication | No | Yes | Yes | Yes |
| No build step required | Yes | Yes | No | No |
| Interactive games supported | Needs JS anyway | Yes (built-in) | Needs JS anyway | Yes |

**Option B is the clear winner.** It satisfies every constraint, eliminates the legacy duplication problem, requires no build tools or frameworks, and the pattern (one HTML template + one JS data file) is easy for future students to understand and extend.

---

## Part 7: Recommended architecture (summary)

### Architecture: Data-driven static site with vanilla HTML/CSS/JavaScript

**Structure:**
```
/                         (repo root, served directly by GitHub Pages)
  index.html              (Home room -- town map)
  about.html, help.html, participants.html
  assets/
    style.css             (shared styles, ~91 lines)
    nav.js                (shared navigation bar generator)
  citypark/               (one folder per room)
    index.html            (name entry form)
    story.html            (generic story page renderer)
    story-data.js         (18 story pages as JS object)
  library/
    index.html            (US map)
    regions/*.html         (7 static region pages)
    state.html            (generic state facts renderer)
    state-data.js         (51-state database)
    wordsearch.html + wordsearch-data.js
    tale.html + tale-data.js
    fillin.html + fillin-data.js
  [... same pattern for each room ...]
  graphics/               (original 458 images, reused in place)
  cgi-bin/, scripts/, data/  (legacy source preserved for reference)
```

**Key design patterns:**

1. **Data/template separation**: Repetitive content uses a single HTML template that reads from a companion `-data.js` file. URL query parameters select which entry to display (e.g., `state.html?state=5` shows California).

2. **Client-side state management**:
   - `localStorage` for persistent data (visitor name in City Park)
   - `sessionStorage` for session-scoped data (clues seen in City Hall, quiz progress in Museum)
   - URL query parameters for page selection (stateless, bookmarkable)

3. **Shared navigation**: `assets/nav.js` dynamically renders the room navigation bar on every page. A `PAGE_DEPTH` variable tells it how many directory levels deep the current page is, so relative paths resolve correctly.

4. **Shared styles**: `assets/style.css` provides base colors, layout, and component styles (~91 lines).

5. **No build step**: Files are served directly from the repo root. No compilation, no bundling, no toolchain.

6. **Legacy preserved for reference**: The original `cgi-bin/`, `scripts/`, and `data/` folders remain in the repo so the legacy behavior can always be audited.

---

## Part 8: Evidence and justification

### Why this architecture satisfies the constraints:

1. **No server-side processing**: All logic runs in the browser via vanilla JavaScript. Pages are static HTML files served directly from disk.

2. **No Perl or CGI dependency**: Zero Perl code is executed. The legacy Perl files are preserved only for reference.

3. **Deployable on GitHub Pages**: The site is live at `https://gjurado15.github.io/KidsTown-Conversion-Group-5/` right now, deployed from the repo root with no build step.

4. **Avoids frameworks**: No React, Vue, Angular, jQuery, or any other library. The entire codebase is vanilla HTML, CSS, and JavaScript.

5. **Understandable by future students**: The pattern is consistent and simple -- each room is a folder containing HTML pages and JS data files. Adding a new state means adding one entry to `state-data.js`. Adding a new riddle means adding one entry to `riddle-data.js`. No special tooling or knowledge is needed beyond basic HTML/CSS/JS.

6. **Straightforward to modify and extend**: The data/template pattern means content changes never require touching the HTML template. New rooms can be added by creating a new folder and adding an entry to `nav.js`.

### How legacy problems were solved:

| Legacy problem | Replacement solution |
|---------------|---------------------|
| CGI dispatcher routing (`kt.cgi?KEY=NNNN`) | Direct file paths (`library/state.html?state=5`) |
| Hardcoded server paths in `kt.ini` | Relative paths computed from `PAGE_DEPTH` |
| 30+ duplicate clue-state scripts (City Hall, Township) | One generic engine + `sessionStorage` for clue tracking |
| Name threaded through every URL (City Park) | `localStorage` stores the name once |
| Quiz state encoded in hidden form fields (Museum) | `sessionStorage` tracks quiz progress |
| Content embedded in Perl `print` statements | Content in standalone JS data files |
| 223 Perl scripts | 63 HTML pages + 15 JS data files |

### Verification:

- An automated link crawler verified all 512 `href`/`src` references site-wide -- zero broken links
- All dynamic query-parameter IDs were verified against their data files -- zero dangling references
- A console-error scan confirmed no JavaScript errors across the site
- All 9 rooms are fully functional with no "(coming soon)" stubs remaining
