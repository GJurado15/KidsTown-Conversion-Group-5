# KidsTown Modernization

This repo holds the original ~1998 Perl/CGI KidsTown site (imported with full
history from [MetroCS/kidstown_cgi](https://github.com/MetroCS/kidstown_cgi))
and tracks the plan to replace it with a static, framework-free site
deployable on GitHub Pages.

**Legacy site (as imported, non-interactive):**
https://gjurado15.github.io/KidsTown-Conversion-Group-5/
*(the "Visit KidsTown" link is expected to fail — it targets a CGI script
GitHub Pages cannot run; this is the constraint we're designing around)*

## Goal

Investigate the existing KidsTown repo and replace it with a new
implementation that behaves the same way to an end user. The legacy site is
both the system being replaced and the de facto requirements spec for
expected behavior.

## Constraints

The replacement:
- must use no server-side processing
- must contain no Perl or CGI dependency
- must be deployable using GitHub Pages
- should avoid frameworks (a framework requires unusually strong justification)
- should be understandable and maintainable by future student developers
- should make future modification and extension reasonably straightforward

## Legacy architecture (investigation findings)

- **Single dispatcher**: `cgi-bin/kt.cgi` is one Perl CGI script that routes
  every request via a `?KEY=NNNN` query parameter, using `kt.db` for
  routing/state and `kt.ini` for config (absolute server paths to each
  room's graphics/scripts folders).
- **"Rooms" as the top-level structure**: `home`, `library`, `school`,
  `museum`, `township`, `cityhall`, `citypark`, `toystore`, `zoo` — each a
  themed area with its own `scripts/<room>/` and `graphics/<room>/` folder.
- **The `.pl` files aren't really programs**: despite the extension, files
  like `scripts/library/b_ak_wrdsrch.pl` are mostly static HTML with
  placeholder tokens (e.g. `#graphic#`) that `kt.cgi` substitutes at request
  time. It's templated content, not server logic.
- 223 Perl/CGI files, ~440 images, and a handful of flat data files
  (`.dat`/`.db`, extensionless `data/citypark/page1-18`) make up the rest.

## Proposed architecture for the replacement

- **Plain static site**: HTML/CSS/JS, no framework, deployed straight from
  the repo via GitHub Pages.
- **Rooms become real page trees**: each legacy "room" maps to a folder of
  static HTML pages (or pages generated from a shared template at build
  time, not at request time).
- **Client-side interactivity**: puzzles, quizzes, and score tracking that
  used to depend on query-string state passed to the CGI dispatcher get
  reimplemented in vanilla JS, using `localStorage` for any state that used
  to live server-side.
- **No build-time server dependency**: if templating is needed to avoid
  duplicating markup across activity pages, it happens as a local
  pre-deploy step (e.g. a small Node or Python script), never at request
  time.

## Replacement site

The new static implementation lives under [`site/`](site/) and reuses the
legacy `graphics/` folder directly (relative paths) rather than duplicating
image assets. It is plain HTML/CSS/JS — no framework, no build step.

- `site/index.html`, `about.html`, `participants.html`, `help.html` — the
  Home room, ported from `scripts/home/*.pl`.
- `site/citypark/` — the City Park interactive story, ported from
  `scripts/citypark/*.pl` + `data/citypark/page1-18`. The visitor's name is
  stored in `localStorage` instead of being threaded through every URL
  (the original passed `name`/`xname` on every link only because CGI is
  stateless) — see `story-data.js` for how the story content and
  page-to-page links are defined.
- `site/museum/` — the Museum room: lobby, Color Exhibition, a 6-page
  linear Rainbow story, and a Planetarium picture-quiz (Basic/Advanced
  Solar System tours) ported from `scripts/museum/wizard.pl` +
  `data/museum/ss1.dat`/`ss2.dat`. See `planetarium/quiz-data.js` for the
  question bank — add a question by appending an entry there.
- `site/zoo/` — the Zoo room: lobby, world map, four region encyclopedia
  pages, and `challenge.html` (a single-question "ZooKeeper's Challenge"
  per region, driven by `challenge-data.js` and a `?region=` query param).
  `zoonav.js` renders the region sub-nav shared across zoo pages.
- `site/library/` — the Library room: a U.S. map, 7 region pages, and
  four generic data-driven engines rather than dozens of near-duplicate
  files — `state.html?state=<1-51>` (state facts, from `state-data.js`),
  `wordsearch.html?state=ak|az|ne`, `tale.html?state=ct|or|wi` (mad-libs),
  and `fillin.html?state=ny|dc` (graded dropdown quiz). Ported from
  `scripts/library/*.pl` + `data/library/b_state_datafile.txt`.
- `site/cityhall/` — the City Hall room: two branching detective stories
  ("The Bungled Bank Burglary" and "The Case of the Alien Photo") driven by
  one `story.html?case=bbb|cap&node=<id>` engine + `story-data.js`. The
  legacy scripts hand-authored a near-duplicate page for every combination
  of "which clues has the player already seen" (a stateless-CGI workaround);
  here that collapses to one node per distinct piece of content, with
  visited-clue tracking in `sessionStorage` unlocking "Solve the Case" once
  all clues for a case have been seen.
- `site/assets/nav.js` — shared nav bar. Rooms not yet migrated render
  greyed-out with a "(coming soon)" label; flip a room's `built` flag once
  it's ready.
- `site/toystore/` — the ToyStore room: 7 riddles (`riddle.html?n=`) and 5
  "shape poems" (`shape.html?n=`, where the poem text is literally drawn in
  the shape of the thing it describes — a star, a leaf, a tree...) each
  driven by a small data file, plus a 3-step bonus problem (`bonus.html`).
  Answers reveal in place with a click, no page navigation, unlike the
  original's per-step CGI pages.
- Root `index.html` is untouched for now (still the legacy demo showing the
  broken CGI link) until enough rooms are migrated to cut over.

## Progress log

| Date | Change |
|------|--------|
| 2026-09-08 | Imported full legacy history from `MetroCS/kidstown_cgi`; enabled GitHub Pages; completed lightest-pass architecture scan; drafted replacement architecture plan above. |
| 2026-09-08 | Built the first two replacement sections under `site/`: Home (nav, town map, about, participants, help) and City Park (name-entry form + 18-page branching story). Verified in a headless browser — all pages, links, and images resolve correctly. |
| 2026-09-08 | Added the Museum section under `site/museum/`: lobby, Color Exhibition, the 6-page Rainbow story, and the Planetarium's Basic/Advanced solar-system picture quiz (ported from `wizard.pl` + `data/museum/ss1.dat`/`ss2.dat`). The quiz's session state (which questions were already played) moved from an encoded string threaded through hidden form fields into `sessionStorage`. Verified in a headless browser. |
| 2026-09-08 | Added the Zoo section under `site/zoo/`: lobby, world map, four region pages (Africa, Australia, Ocean, Polar Regions) each with an animal encyclopedia, and a single-question "ZooKeeper's Challenge" per region ported from the `d6_*.pl` files. Verified in a headless browser. |
| 2026-09-08 | Added the Library section under `site/library/`: US map, 7 region pages, and generic data-driven engines for all 51 state fact pages, 3 word searches (AK/AZ/NE), 3 mad-libs "Wacky Web Tales" (CT/OR/WI), and 2 fill-in-the-blank quizzes (NY/DC) — ported from the 51-record `b_state_datafile.txt` and the corresponding `.pl` scripts. Verified in a headless browser. |
| 2026-09-10 | Added the City Hall section under `site/cityhall/`: two branching detective stories ("The Bungled Bank Burglary" and "The Case of the Alien Photo") via one generic `story.html` engine + `story-data.js`. Collapsed ~30 legacy scripts (many byte-identical, differing only by which combination of clues the stateless CGI had recorded the player as having seen) down to one node per distinct piece of content, with clue-visited tracking moved to `sessionStorage`. Verified in a headless browser. |
| 2026-09-10 | Added the ToyStore section under `site/toystore/`: 7 riddles, 5 "shape poems," and a 3-step bonus problem, ported from `scripts/toystore/*.pl`. Answers now reveal in place with a click instead of navigating to a separate CGI page per step. Verified in a headless browser. |

---

## Project history

KidsTown was conceived, designed and developed by students at the
University of Colorado at Denver through participation in the
Senior Design Project course offered by the
Department of Computer Science and Engineering.
The course represents the capstone experience of the
Bachelor of Science in Computer Science and Engineering degree program
and involves integrating and applying academic learning through the
design and creation of practical products.

KidsTown is a result of the Children's Literacy Project,
a joint effort by the Tattered Cover Book Store and the
University of Colorado at Denver to provide CU-Denver students with
real-world experience in developing a working relationship with a
business while designing and create computer-based tools for promoting
literacy skills among children.
Through this collaboration, the participants address their individual
goals in a manner that acknowledges a common responsibility for
addressing the needs of other community members.

### Children's Literacy Project

The Children's Literacy Project was a collaborative partnership of the
University of Colorado at Denver (UCD) and the Tattered Cover Book Store.

The project, initiated in January 1996, involved UCD students and faculty
and Tattered Cover representatives in the ongoing development and
dissemination of computer-based tools to promote children's literacy.

UCD students benefited by gaining real-world experience in developing
working relationships with a business and by enjoying the opportunity
to integrate and apply their academic learning while designing and creating
community-oriented products. As of Spring 1998, over 100 students had
been involved in the project, along with advisors from UCD and
the Tattered Cover.

The initial product of this partnership is KidsTown, a World Wide Web
site that provides a resource for children, families, and teachers and
promotes literacy through interactive activities that are simultaneously
informative, educational, and entertaining.

Through the Children's Literacy Project, UCD and the Tattered Cover
demonstrated their commitment to supporting the educational needs of local
elementary and university students, and those of children web-wide.
