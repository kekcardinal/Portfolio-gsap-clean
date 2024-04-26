gsap.to(".triangle_disponibilite", {
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: "none",
});


document.addEventListener("DOMContentLoaded", function () {
  let heroAnimationTriggered = false; // Flag to track if animation has been triggered

  // Check if the animation has already been triggered before running it again
  if (!heroAnimationTriggered) {
    gsap.to(".hero", {
      scale: 1,
      opacity: 1,
      duration: 2,
      delay: 1.5,
      ease: "power3.out",
      onStart: () => {
        heroAnimationTriggered = true; // Set the flag to true when animation starts
      },
    });
  }
});


// Delay the entire animation for 1.5 seconds

// Hide the text initially using display: none
const textContainers = document.querySelectorAll(
  ".hero_texte p, .heure_meteo_disponibilite p, .disponibilite p"
);

const svg_triangle = document.querySelector(".triangle_disponibilite");

svg_triangle.style.display = "none";
textContainers.forEach((container) => {
  container.style.display = "none";
});

// Delay the entire animation for 1.5 seconds
gsap.delayedCall(1.5, startAnimation);

function startAnimation() {
  // Show the text using GSAP before starting the animation
  gsap.to(
    ".hero_texte p, .heure_meteo_disponibilite p, .disponibilite p, .triangle_disponibilite",
    {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2, // stagger the reveal of each paragraph
      onComplete: animateText, // call animateText function after revealing text
    }
  );
}

function animateText() {
  // Change display to 'block' to reveal the text
  svg_triangle.style.display = "block";

  textContainers.forEach((container) => {
    container.style.display = "block";
  });

  // Split text into spans within <p> elements
  textContainers.forEach((container) => {
    const text = container.innerText;
    const chars = text.split("");
    const spans = chars.map((char) => {
      if (char === " ") {
        return "<span>&nbsp;</span>"; // preserve spaces with non-breaking space
      } else {
        return `<span>${char}</span>`;
      }
    });
    container.innerHTML = spans.join("");
  });

  // GSAP animation
  const spansToAnimate = document.querySelectorAll(
    ".hero_texte span, .heure_meteo_disponibilite span, .disponibilite span, .disponibilite svg"
  );
  spansToAnimate.forEach((span, index) => {
    gsap.from(span, {
      duration: 0.5,
      opacity: 0,
      delay: 0.02 * index, // delay each span based on its index
      y: 20,
    });
  });
}

// Function to calculate adjusted y value
function calculateAdjustedYValue(targetY) {
  const windowHeight = window.innerHeight;
  const bottomBarHeight = windowHeight - document.documentElement.clientHeight;
  const adjustedY =
    windowHeight * (parseInt(targetY) / 100) - bottomBarHeight - 50;
  return `${adjustedY}px`;
}

// Apply the GSAP animation
gsap.to(".hero", {
  y: "100%", // Adjusted y value based on bottom bar height
  ease: "none",
  scrollTrigger: {
    trigger: ".a_propos",
    scrub: true,
  },
});
