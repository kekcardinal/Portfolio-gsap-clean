document.addEventListener("DOMContentLoaded", function () {
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
    const startBtnClicked = document.querySelector(".navbar");

    // Check if the opacity is "0" (as a string) before hiding the navbar
    if (!startBtnClicked.classList.contains("navbar_active")) {
      gsap.to(".navbar", { y: "100%", duration: 0.5, ease: "power3.inOut" });
    }
  }

  // Function to show the navbar
  function showNavbar() {
    gsap.to(".navbar", { y: "0%", duration: 0.5, ease: "power3.inOut" });
  }

  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);

    if (!scrollTimeout) {
      hideNavbar();
    }

    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
      hideNavbar();
    }, 2500);

    showNavbar();
  });

  const startBtn = document.getElementById("startBtn");
  const menuList = document.getElementById("menuList");
  const bars = document.querySelectorAll(".bar"); // Select all bars

  let clickCount = 0;
  let currentX = 0;

  startBtn.addEventListener("click", () => {
    clickCount++;
    let actif = document.querySelector(".navbar");
    actif.classList.add("navbar_active");
    if (clickCount === 1) {
      menuList.style.display = "flex";
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
          actif.classList.remove("navbar_active");
          gsap.to(menuList.children, {
            x: "-100%",
            duration: 0,
            ease: "power2.inOut",
            onComplete: () => {
              menuList.style.display = "none";
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
});
