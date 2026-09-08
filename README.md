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

## Progress log

| Date | Change |
|------|--------|
| 2026-09-08 | Imported full legacy history from `MetroCS/kidstown_cgi`; enabled GitHub Pages; completed lightest-pass architecture scan; drafted replacement architecture plan above. |

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
