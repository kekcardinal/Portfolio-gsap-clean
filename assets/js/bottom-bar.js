document.addEventListener("DOMContentLoaded", function () {
  let previousHeight = window.innerHeight; // Initial window height

  // Check if the user is on a mobile device
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Function to update bottom bar height
    function updateBottomBarHeight() {
      const currentHeight = window.innerHeight;
      const bottomBarHeight = previousHeight - currentHeight;
      previousHeight = currentHeight;

      // Update the content of the hero_texte div with the bottom bar height
      const heroTexteDiv = document.querySelector(".test");
      if (heroTexteDiv) {
        heroTexteDiv.innerHTML = `<p>Bottom Bar Height: ${bottomBarHeight}px</p>`;
      }
    }

    // Initial update
    updateBottomBarHeight();

    // Listen for window resize events to update bottom bar height
    window.addEventListener("resize", updateBottomBarHeight);
  }
});
