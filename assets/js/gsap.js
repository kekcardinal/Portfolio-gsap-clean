gsap.set(".rectangle", { y: 0 });

// Apply overflow: hidden to body during loading animation
document.body.style.overflow = "hidden";
let test = document.querySelector('.content');
// test.style.display = "none";
console.log(test);
test.style.overflow = "hidden";
console.log(test);
gsap.to(".content", { delay:0.5, opacity: 1, duration: 2 });
gsap.to(".rectangle", {
    y: "100%",
    duration: 1,
    stagger: 0.2,
    ease: "power3.in",
    delay: 0.5, // Delay before rectangles start disappearing
    onComplete: function() {
        // Fade in content
        document.body.style.overflow = "auto"; // Revert overflow to auto
        let test = document.querySelector('.content');
        test.style.overflow = "hidden";
        document.querySelector('.container').remove(); // Remove the loading screen
    }
});

gsap.from(".hero", {
  scale: 1.2, // Zoom in to 20% larger than original size
  opacity: 1, // Fade in
  duration: 2,
  delay:1.5, // Delay after rectangles start disappearing
  ease: "power3.out",
});

// Delay the entire animation for 1.5 seconds


// Hide the text initially using display: none
const textContainers = document.querySelectorAll('.hero_texte p');
textContainers.forEach(container => {
    container.style.display = 'none';
});

// Delay the entire animation for 1.5 seconds
gsap.delayedCall(1.5, startAnimation);

function startAnimation() {
    // Show the text using GSAP before starting the animation
    gsap.to('.hero_texte p', {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2, // stagger the reveal of each paragraph
        onComplete: animateText, // call animateText function after revealing text
    });
}

function animateText() {
    // Change display to 'block' to reveal the text
    textContainers.forEach(container => {
        container.style.display = 'block';
    });

    // Split text into spans within <p> elements
    textContainers.forEach(container => {
        const text = container.innerText;
        const chars = text.split('');
        const spans = chars.map(char => {
            if (char === ' ') {
                return '<span>&nbsp;</span>'; // preserve spaces with non-breaking space
            } else {
                return `<span>${char}</span>`;
            }
        });
        container.innerHTML = spans.join('');
    });

    // GSAP animation
    const spansToAnimate = document.querySelectorAll('.hero_texte span');
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
gsap.to('.hero', {
  y: '100%', // Adjust the distance to move up
  ease: 'none',
  scrollTrigger: {
    trigger: '.a_propos',
    scrub: true,
  },
});

let navbarOpen = false; // Initialize navbar state
const tl = gsap.timeline(); // Create a GSAP timeline
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();
let isAnimating = false; // Flag to track animation status

function toggleNavbar() {
  if (isAnimating) {
    return;
  }

  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.classList.toggle('show'); // Toggle the 'show' class for navigation links
  navbarOpen = !navbarOpen; // Update navbar state
  isAnimating = true;

 

  if (navbarOpen) {
    // tl.clear();
    // tl2.clear();
    // Play animation to X for hamburger icon
    tl.to('.bar:nth-child(1)', {
      y: 10, // Move first bar vertically by 10px
      rotate: 45, // Rotate first bar to 45 degrees
      duration: 0.5, // Animation duration in seconds
      ease: 'power2.inOut', // Easing function
    }) // No need to specify a position (0) if it's the next animation in the timeline

      .to('.bar:nth-child(2)', {
        opacity: 0, // Hide middle bar
        duration: 0.5, // Animation duration in seconds
        ease: 'power2.inOut', // Easing function
      }, '<') // Use "<" to position this animation before the previous one

      .to('.bar:nth-child(3)', {
        y: -10, // Move third bar vertically by -10px
        rotate: -45, // Rotate third bar to -45 degrees
        duration: 0.5, // Animation duration in seconds
        ease: 'power2.inOut', // Easing function
      }, '<'); // Use "<" to position this animation before the previous one

    // Animate navbar items to appear from the left one by one
    tl2.from('.navbar-item', {
      x: '-100%', // Start position outside the screen on the left
      duration: 0.5, // Animation duration in seconds
      ease: 'power2.out', // Easing function
      stagger: 0.1 // Stagger the animation for each item
    });

    tl.to('.delay', {
      duration: 0.6, // Animation duration in seconds
    }).eventCallback('onComplete', () => {
      isAnimating = false; // Reset animation status when complete
    }); 
  
  } else if (!navbarOpen){
    let toggle = document.querySelector(".navbar-toggle");
    // Animate navbar items to appear from the left one by one
   
    // Play reverse animation to bars for hamburger icon
    tl.to('.bar:nth-child(3)', {
      y: 0, // Move third bar back to its original position
      rotate: 0, // Rotate third bar back to 0 degrees
      duration: 0.5, // Animation duration in seconds
      ease: 'power2.inOut', // Easing function
    }) // No need to specify a position (0) if it's the next animation in the timeline

      .to('.bar:nth-child(2)', {
        opacity: 1, // Show middle bar
        duration: 0.5, // Animation duration in seconds
        ease: 'power2.inOut', // Easing function
      }, '<') // Use "<" to position this animation before the previous one

      .to('.bar:nth-child(1)', {
        y: 0, // Move first bar back to its original position
        rotate: 0, // Rotate first bar back to 0 degrees
        duration: 0.5, // Animation duration in seconds
        ease: 'power2.inOut', // Easing function
      }, '<') // Use "<" to position this animation before the previous one
     
      tl3.to('.navbar-item', {
        x: '100%', // End position outside the screen on the right
        duration: 0.5, // Animation duration in seconds
        ease: 'power2.out', // Easing function
        stagger: 0.1 // Stagger the animation for each item
      });
  

      tl.to('.delay', {
        duration: 0.6, // Animation duration in seconds
      }).eventCallback('onComplete', () => {
        isAnimating = false; // Reset animation status when complete
      }); 
      
    //Animate navbar items to disappear to the left one by one
    // tl3.from('.navbar-item', {
    //   x: '-100%', // End position outside the screen on the left
    //   duration: 0.5, // Animation duration in seconds
    //   ease: 'power2.in', // Easing function
    //   stagger: -0.1 // Stagger the animation for each item in reverse
    // });
  }
}









