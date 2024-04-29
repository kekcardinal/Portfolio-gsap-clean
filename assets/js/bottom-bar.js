document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is on a mobile device
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Create a dummy element to measure the bottom bar height
    const dummyElement = document.createElement("div");
    dummyElement.style.visibility = "hidden";
    dummyElement.style.position = "fixed";
    dummyElement.style.bottom = "0";
    dummyElement.style.width = "100%";
    dummyElement.style.height = "0px"; // Set the initial height to 1px
    document.body.appendChild(dummyElement);

    // Wait for the dummy element to be rendered
    setTimeout(function () {
      // Get the calculated height of the bottom bar
      const bottomBarHeight = dummyElement.getBoundingClientRect().height;

      // Remove the dummy element from the DOM
      document.body.removeChild(dummyElement);

      // Update the content of the hero_texte div with the bottom bar height
      const heroTexteDiv = document.querySelector(".test");
      if (heroTexteDiv) {
        heroTexteDiv.innerHTML = `<p>Bottom Bar Height: ${bottomBarHeight}px</p>`;
      }
    }, 500); // Adjust the timeout as needed for rendering delay
  }
});
