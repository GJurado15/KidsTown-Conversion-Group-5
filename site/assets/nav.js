// Renders the KidsTown nav bar into <div id="nav-bar"></div>.
//
// Each page must set `window.PAGE_DEPTH` (number of folders below /site/)
// before loading this script, e.g. `<script>window.PAGE_DEPTH = 1;</script>`
// for pages under site/citypark/.
//
// To bring a new room online, flip its entry's `built` flag to true and set
// `href` to that room's index page.
(function () {
  const up = "../".repeat(window.PAGE_DEPTH || 0);
  const SITE_ROOT = up;
  const GRAPHICS_ROOT = up + "../graphics/";

  const rooms = [
    { label: "KidsTown", icon: "navbtn_town.gif", built: true, href: SITE_ROOT + "index.html" },
    { label: "CityHall", icon: "navbtn_cityhall.gif", built: false },
    { label: "School", icon: "navbtn_school.gif", built: false },
    { label: "Library", icon: "navbtn_library.gif", built: false },
    { label: "Zoo", icon: "navbtn_zoo.gif", built: false },
    { label: "ToyStore", icon: "navbtn_toystore.gif", built: false },
    { label: "CityPark", icon: "navbtn_citypark.gif", built: true, href: SITE_ROOT + "citypark/index.html" },
    { label: "TownShip", icon: "navbtn_township.gif", built: false },
    { label: "Museum", icon: "navbtn_museum.gif", built: true, href: SITE_ROOT + "museum/index.html" },
    { label: "Help", icon: "navbtn_help.gif", built: true, href: SITE_ROOT + "help.html" },
  ];

  const html = rooms
    .map((room) => {
      const img = `<img src="${GRAPHICS_ROOT}home/${room.icon}" alt="${room.label}" width="54" height="60">`;
      if (room.built) {
        return `<a href="${room.href}">${img}${room.label}</a>`;
      }
      return `<span class="disabled" title="${room.label} is not migrated yet">${img}${room.label}<br><small>(coming soon)</small></span>`;
    })
    .join("\n");

  document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("nav-bar");
    if (mount) mount.innerHTML = html;
  });
})();
