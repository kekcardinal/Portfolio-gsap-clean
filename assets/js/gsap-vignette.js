document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".marquee-content", {
    x: "-5%",
    duration: 10,
    ease: "linear",
    scrollTrigger: {
      trigger: ".a_propos",
      scrub: true,
    },
  });
});
