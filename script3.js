// const lenis = new Lenis({
//     duration: 1.2, // Adjust speed (higher = slower)
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
//     smooth: true, // Enable smooth scrolling
//     smoothTouch: false, // Disable smooth scroll on touch devices
//     infinite: false // No infinite scroll
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("open");
}


const audio = document.getElementById("nohaAudio");
const audioButton = document.getElementById("audioButton");
const audioContainer = document.querySelector(".audio-container");

audioButton.addEventListener("click", () => {
    // console.log("clicked")
    if (audio.paused) {
        audio.play();
        audioButton.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
        audioContainer.classList.remove("paused"); // Start rotation
    } else {
        audio.pause();
        audioButton.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
        audioContainer.classList.add("paused"); // Stop rotation
    }
});


let cursor=document.querySelector('.cursor');
let cursor_outline=document.querySelector('.cursor_outline');
window.addEventListener('mousemove',(e)=>{
    let outlineSize = 40;  // Adjust this based on your actual CSS size
    let cursorSize = 10;   // Adjust this based on your actual CSS size

    let offset = (outlineSize - cursorSize) / 2; // Calculate offset

    var cursorX=e.clientX;
    var cursorY=e.clientY;

    gsap.to('.cursor',{
        y:cursorY,
        x:cursorX,
        duration:0.1,
        ease:'power2.out'
    })
    gsap.to('.cursor_outline',{
        y:cursorY-offset,
        x:cursorX-offset,
        duration:0.4,
        ease:'power3.out'
    })

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursor_outline.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
})


gsap.to(".image",{
    y:'-170%',
    duration:10
},'heading')
gsap.to('.overlay',{
    opacity:0,
    duration:5,
    delay:1
})
gsap.to('.mainHeading',{
    fontSize:'15vw',
    duration:3,
    delay:2,
    opacity:1
},'heading')

gsap.utils.toArray("#about .about span").forEach((span, index) => {
    gsap.from(span, {
    //   opacity: 0,
      x:'-30',
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: span,
        start: "top 90%",
        // markers:true,
        toggleActions: "play none none reverse"
      }
    });
  });




gsap.from(".pics img, .pics video", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".page4",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});



gsap.from('.swiper1 .swiper',{
    x:'-120%',
    duration:14,
    repeat:-1,
    ease:"none"
})

gsap.to('.swiper2 .swiper',{
    x:'-120%',
    duration:14,
    repeat:-1,
    ease:"none"
})
gsap.from('.page5 video',{
    scaleX:0.3,
    duration:10,
    // ease: "power2.out",
    scrollTrigger:{
        trigger:'.page5',
        scroller:'body',
        start:'top 50%',
        // end:'top 20%',
        scrub:0.5,
        // markers:true
    }
})


// Letter-by-letter animation
let text = document.querySelector(".interactive-text");
let letters = text.textContent.split("");

text.innerHTML = letters.map(letter => `<span>${letter}</span>`).join("");

gsap.from(".interactive-text span", {
    opacity: 0,
    y: 10,
    stagger: 0.1,
    duration: 1.5,
    ease: "power2.out",
});



document.querySelectorAll(".interactive-text span").forEach(span => {
    span.addEventListener("mouseenter", () => {
        gsap.to(span, {
            x: gsap.utils.random(-3, 3), 
            y: gsap.utils.random(-3, 3), 
            rotation: gsap.utils.random(-5, 5), 
            duration: 0.2,
            repeat: 2,
            yoyo: true
        });
    });
});


gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.from(item, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        duration: 1.5,
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            scrub: true
        }
    });
});



var tl = gsap.timeline({scrollTrigger:{
    trigger:".page8",
    // markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
 }});
 tl.to('.top',{
    y:'-100%'
 },'same').to('.bottom',{
    y:'120%'
 },'same').to('.top h1',{
    y:'110px'
 },'same').to('.bottom h1',{
    y:'-110px'
 },'same').to('.content',{
    marginTop:0
 },'same')


 gsap.from(".page7 h1, .page7 .intro", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".page7",
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none reverse"
    }
});


gsap.from(".quote-section", {
    opacity: 0,
    y: 80,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".quote-section",
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".quote-section blockquote", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".quote-section",
        start: "top 75%",
        end: "top 40%",
        toggleActions: "play none none reverse"
    }
});


gsap.from(".legacy h2", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".legacy",
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".legacy p", {
    opacity: 0,
    y: 40,
    duration: 1.5,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".legacy",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse"
    }
});


//  gsap.from(".shahada-section", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
// var seq=gsap.timeline();
//  seq.from(".page9 h1", { opacity: 0, y: -20, duration: 1.5});
//  seq.from(".page9 .intro", { opacity: 0, y: 20, duration: 1.5 });
//  seq.from(".translation", { opacity: 0, y: 20, duration: 1.5,});

gsap.from('.page9 h1',{
    opacity: 0, y: 50, duration: 1.5, 
    scrollTrigger:{
        trigger:'.page9',
        scroller:'body',
        start:'top 70%',
       
    }
})


 gsap.to('.shahada-section-copy',{
    height:'100%',
    duration:10,
    delay:2,
    scrollTrigger:{
        trigger:'.shahada',
        scroller:'body',
        // markers:true,
        start:'top 75%',
        scrub:0.2
    }
 })
//  gsap.from(".battle-section", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
 document.querySelectorAll(".battle-section").forEach((section, i) => {
    gsap.fromTo(section, { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 60%",
            toggleActions: "play none none none",
        }
    });
});