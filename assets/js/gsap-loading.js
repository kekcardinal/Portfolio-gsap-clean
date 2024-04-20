gsap.set(".rectangle", { y: 0 });

// Apply overflow: hidden to body during loading animation
document.body.style.overflow = "hidden";
let test = document.querySelector(".content");
// test.style.display = "none";
console.log(test);
test.style.overflow = "hidden";
console.log(test);
gsap.to(".content", { delay: 0.5, opacity: 1, duration: 2 });
gsap.to(".rectangle", {
  y: "100%",
  duration: 1,
  stagger: 0.2,
  ease: "power3.in",
  delay: 0.5, // Delay before rectangles start disappearing
  onComplete: function () {
    // Fade in content
    document.body.style.overflow = "auto"; // Revert overflow to auto
    let test = document.querySelector(".content");
    test.style.overflow = "hidden";
    document.querySelector(".loading-screen").remove(); // Remove the loading screen
  },
});
