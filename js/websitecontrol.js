window.addEventListener("scroll", function() {

    var distanceToBottom = document.documentElement.scrollHeight - window.innerHeight - window.pageYOffset;
    
    if (distanceToBottom <= 0) {

        window.scrollTo({
            top: 0
        });
    }
});

// Get the button element by its ID
var upButton = document.getElementById("upButton");

// Function to check the scroll position
window.addEventListener("scroll", function() {
    // Check if the user has scrolled to the top of the page
    if (window.pageYOffset > 100) {
        // Set the button display to 'none'
        upButton.style.display = "block";
    } else {
        // Optionally, show the button if not at the top
        upButton.style.display = "none";
    }
});


var button = document.getElementById("upButton");

button.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("keydown", e => {
    if (e.key === "Enter")  {
        window.scrollTo({
            top: window.scrollY + window.innerHeight * 0.8,
            behavior: 'smooth'
        });
    }
});

//gsap.to('.phone', {x: '600%', y: '-100%', delay: 2});
//gsap.to('.mail', {x: '200%', y: '500%', delay: 2});
//gsap.to('.linkedin', {x: '-175%', y: '400%', delay: 2});
//gsap.to('.github', {x: '-325%', y: '-200%', delay: 2});
//gsap.to('.last', {display: 'none', delay: 2});
//gsap.to('.matthew', {y: '700%', delay: 2});
//gsap.to('.baber', {y: '600%', x: '75%', delay: 2});
//gsap.to('.blink', {y: '600%', delay: 2});

// GSAP Animations (Homepage)
const timeline = gsap.timeline({defaults: {duration: 0.25}})
    // Homepage
timeline
    .from('.matthew', {y: '-100%',  color: 'transparent', ease: "power1.inOut"})
    .from('.baber', {y: '-100%',  color: 'transparent', ease: "power1.inOut"})
    .from('.phone', {y: '-200%', opacity: 0, ease: "power1.inOut"})
    .from('.mail', {y: '-100%', color: 'transparent', ease: "power1.inOut"})
    .from('.linkedin', {y: '-100%',  color: 'transparent', ease: "power1.inOut"})
    .from('.github', {y: '-100%',  color: 'transparent', ease: "power1.inOut"})
    .from('.last', {y: '-100%',  color: 'transparent', ease: "power1.inOut"})
    .from('.blink', {x: '-100%',  color: 'transparent', ease: "power1.inOut"})

gsap.utils.toArray(".github").forEach(h1 => {
    let hover = gsap.to(h1, {scale: 1.4, duration: 0.25, paused: true, ease: "power1.inOut", color: '#001220', background: '#ffffff'});
    h1.addEventListener("mouseenter", () => hover.play());
    h1.addEventListener("mouseleave", () => hover.reverse());
  });