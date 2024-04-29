document.addEventListener("DOMContentLoaded", function () {
  // Calculate top and bottom bar heights
  const totalScreenHeight = screen.availHeight;
  const visibleWindowHeight = window.innerHeight;
  const topBarHeight = totalScreenHeight - visibleWindowHeight;
  const bottomBarHeight =
    visibleWindowHeight - document.documentElement.clientHeight;

  // Update the content of the hero_texte div with bar heights
  const heroTexteDiv = document.querySelector(".test");
  if (heroTexteDiv) {
    heroTexteDiv.innerHTML = `
            <p>Top Bar Height: ${topBarHeight}px</p>
            <p>Bottom Bar Height: ${bottomBarHeight}px</p>
          `;
  }

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
});
