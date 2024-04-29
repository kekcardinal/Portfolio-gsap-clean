document.addEventListener("DOMContentLoaded", function () {
  let previousHeight = window.innerHeight; // Initial window height

  // Function to update top and bottom bar heights
  function updateBarHeights() {
    const currentHeight = window.innerHeight;
    const topBarHeight = Math.abs(previousHeight - currentHeight);
    const bottomBarHeight =
      currentHeight - document.documentElement.clientHeight;

    // Update the content of the test div with bar heights
    const testDiv = document.querySelector(".test");
    if (testDiv) {
      testDiv.innerHTML = `
          <p>Top Bar Height: ${topBarHeight}px</p>
          <p>Bottom Bar Height: ${bottomBarHeight}px</p>
        `;
    }

    previousHeight = currentHeight; // Update previous height
  }

  // Initial update
  updateBarHeights();

  // Listen for window resize events to update bar heights
  window.addEventListener("resize", updateBarHeights);
});

//   const height =
//     window.innerHeight ||
//     document.documentElement.clientHeight ||
//     document.body.clientHeight;

//   const outerheight = window.outerHeight;

//   console.log("Height = ", height, ", Outer = ", outerheight);

//   const heroTexteDiv = document.querySelector(".test");
//   if (heroTexteDiv) {
//     heroTexteDiv.innerHTML = `<p>Height: ${height}px, Outer:${outerheight}</p>`;
//   }

//   const scheight = screen.availHeight;
//   const sheight = screen.height;

//   console.log("Avail Height = ", scheight);

//   const heroTexteDiv2 = document.querySelector(".test2");
//   if (heroTexteDiv2) {
//     heroTexteDiv2.innerHTML = `<p>Avail Height: ${scheight}px</p>`;
//   }
