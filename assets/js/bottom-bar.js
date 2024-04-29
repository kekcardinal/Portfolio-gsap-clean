document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is on a mobile device

  // Calculate the height of the bottom browser bar
  const bottomBarHeight = window.outerHeight - window.innerHeight;

  // Update the content of the hero_texte div with the bottom bar height
  const heroTexteDiv = document.querySelector(".test");
  if (heroTexteDiv) {
    heroTexteDiv.innerHTML = `<p>Bottom Bar Height: ${bottomBarHeight}px</p>`;
  }
});
