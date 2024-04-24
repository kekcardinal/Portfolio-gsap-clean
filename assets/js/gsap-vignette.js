// GSAP animation for the marquee
// gsap.registerPlugin(ScrollTrigger);

gsap.to(".marquee-content", {
  x: "-5%", // Move the content to the left by its full width
  duration: 10, // Duration of the animation (adjust as needed)
  ease: "linear", // Linear easing for continuous movement
  // Repeat indefinitely
  scrollTrigger: {
    trigger: ".a_propos",
    // start: "top bottom", // Start animation when the top of the marquee container reaches the bottom of the viewport
    // end: "+=100%", // End animation when the marquee container has scrolled 100% of its height
    scrub: true, // Smoothly animates the marquee based on scroll
    // markers: true, // Optional: Shows markers for debugging purposes
  },
});

// ScrollTrigger event listener to pause/resume the marquee animation
// ScrollTrigger.addEventListener("refresh", () => ScrollTrigger.update());

// ScrollTrigger.addEventListener("scrollEnd", () => {
//   gsap.to(".marquee-content", {
//     paused: window.scrollY > 0, // Pause animation if user has scrolled down
//   });
// });
