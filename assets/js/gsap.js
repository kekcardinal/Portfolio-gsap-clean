gsap.registerPlugin(ScrollTrigger);

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

gsap.from(".hero", {
  scale: 1.2, // Zoom in to 20% larger than original size
  opacity: 1, // Fade in
  duration: 2,
  delay: 1.5, // Delay after rectangles start disappearing
  ease: "power3.out",
});

// Delay the entire animation for 1.5 seconds

// Hide the text initially using display: none
const textContainers = document.querySelectorAll(".hero_texte p");
textContainers.forEach((container) => {
  container.style.display = "none";
});

// Delay the entire animation for 1.5 seconds
gsap.delayedCall(1.5, startAnimation);

function startAnimation() {
  // Show the text using GSAP before starting the animation
  gsap.to(".hero_texte p", {
    duration: 0.5,
    opacity: 1,
    stagger: 0.2, // stagger the reveal of each paragraph
    onComplete: animateText, // call animateText function after revealing text
  });
}

function animateText() {
  // Change display to 'block' to reveal the text
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
  const spansToAnimate = document.querySelectorAll(".hero_texte span");
  spansToAnimate.forEach((span, index) => {
    gsap.from(span, {
      duration: 0.5,
      opacity: 0,
      delay: 0.02 * index, // delay each span based on its index
      y: 20,
    });
  });
}
// Move the text up as the user scrolls down
gsap.to(".hero", {
  y: "100%", // Adjust the distance to move up
  ease: "none",
  scrollTrigger: {
    trigger: ".a_propos",
    scrub: true,
  },
});

// Update your GSAP animation
gsap.to(".navbar", {
  duration: 1,
  y: "0%", // Start from bottom
  delay: 2, // Delay after loading screen is over
  ease: "power3.out",
});

let scrollTimeout;

// Function to hide the navbar
function hideNavbar() {
  const startBtnClicked = document.querySelector(".second_bar");

  // Get the computed style of the startBtnClicked element
  const computedStyle = window.getComputedStyle(startBtnClicked);

  // Get the opacity value from the computed style
  const opacity = computedStyle.getPropertyValue("opacity");

  // Check if the opacity is "0" (as a string) before hiding the navbar
  if (opacity !== "0") {
    gsap.to(".navbar", { y: "100%", duration: 0.5, ease: "power3.inOut" });
  }
}

// Function to show the navbar
function showNavbar() {
  gsap.to(".navbar", { y: "0%", duration: 0.5, ease: "power3.inOut" });
}

// Scroll event listener
window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout); // Clear any existing timeout

  if (!scrollTimeout) {
    hideNavbar(); // Hide navbar on initial scroll
  }

  scrollTimeout = setTimeout(() => {
    scrollTimeout = null;
    hideNavbar(); // Hide navbar after inactivity
  }, 2500); // Adjust the inactivity timeout (milliseconds)

  showNavbar(); // Show navbar when scrolling starts
});

const startBtn = document.getElementById("startBtn");
const menuList = document.getElementById("menuList");
const bars = document.querySelectorAll(".bar"); // Select all bars

let clickCount = 0;
let currentX = 0;

startBtn.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    currentX = 0;
    const tl = gsap.timeline(); // Create a GSAP timeline

    tl.to(menuList.children, {
      x: `${currentX}%`,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
    })
      .to(
        bars[0],
        { y: 9.5, rotate: 45, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.5"
      ) // Animate the first bar
      .to(bars[1], { opacity: 0, duration: 0.5 }, "-=0.5") // Animate the second bar
      .to(
        bars[2],
        { y: -9.5, rotate: -45, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.5"
      ); // Animate the last bar
  } else if (clickCount === 2) {
    currentX += 100;
    gsap.to(menuList.children, {
      x: `${currentX}%`,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1,
      onComplete: () => {
        gsap.to(menuList.children, {
          x: "-100%",
          duration: 0,
          ease: "power2.inOut",
          onComplete: () => {
            currentX = 0;
            clickCount = 0;
            // Reset the transformations on the bars
            gsap.to(bars, { y: 0, rotate: 0, opacity: 1, duration: 0.5 });
          },
        });
      },
    });
  }
});
