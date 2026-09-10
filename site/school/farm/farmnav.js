// Renders the Farm Field-Trip's Start/Animals/Crops/End bar into
// <div id="farm-nav"></div>. All site/school/farm/*.html pages live at the
// same depth, so paths here are fixed.
document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("farm-nav");
  if (!mount) return;
  mount.innerHTML =
    '<a href="index.html">Start</a> &nbsp; ' +
    '<a href="animals.html">Animals</a> &nbsp; ' +
    '<a href="crops.html">Crops</a> &nbsp; ' +
    '<a href="end.html">End</a>';
});
