document.addEventListener("DOMContentLoaded", function () {
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const outerheight = window.outerHeight;

  console.log("Height = ", height, ", Outer = ", outerheight);

  const heroTexteDiv = document.querySelector(".test");
  if (heroTexteDiv) {
    heroTexteDiv.innerHTML = `<p>Height: ${height}px, Outer:${outerheight}</p>`;
  }

  const scheight = screen.availHeight;

  console.log("Screen Height = ", scheight);

  const heroTexteDiv2 = document.querySelector(".test2");
  if (heroTexteDiv2) {
    heroTexteDiv2.innerHTML = `<p>Screen Height: ${scheight}px</p>`;
  }
});
