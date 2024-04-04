window.addEventListener("scroll", function() {

    var distanceToBottom = document.documentElement.scrollHeight - window.innerHeight - window.pageYOffset;
    
    if (distanceToBottom <= 0) {

        window.scrollTo({
            top: 0
        });
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

// GSAP Animations (Homepage)
const timeline = gsap.timeline({defaults: {duration: 0.35}})

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