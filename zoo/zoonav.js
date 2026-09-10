// Renders the Zoo's region sub-nav into <div id="zoo-nav"></div>.
// All site/zoo/*.html pages are at PAGE_DEPTH 1, so paths here are fixed
// (unlike assets/nav.js, which has to support multiple depths).
document.addEventListener("DOMContentLoaded", () => {
  const regions = [
    { label: "Ocean", href: "ocean.html", icon: "ocean3a.gif" },
    { label: "Africa", href: "africa.html", icon: "africa3a.gif" },
    { label: "Australia", href: "australia.html", icon: "aussie3a.gif" },
    { label: "Polar Regions", href: "polar.html", icon: "polar3a.gif" },
  ];

  const html = regions
    .map(
      (r) =>
        '<a href="' + r.href + '"><img src="../graphics/zoo/' + r.icon +
        '" width="37" height="37" alt="">' + r.label + "</a>"
    )
    .join("\n");

  const mount = document.getElementById("zoo-nav");
  if (mount) mount.innerHTML = html;
});
