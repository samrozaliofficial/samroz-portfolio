window.addEventListener("load", () => {
  gsap.to(".page-loader", {
    opacity: 0,
    duration: 1.2,
    delay: .5,
    onComplete: () => document.querySelector(".page-loader").remove()
  });
});
gsap.registerPlugin(ScrollTrigger);

/* LENIS SMOOTH SCROLL */
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  direction: "vertical",
  gestureDirection: "vertical",
  smoothTouch: false,
  touchMultiplier: 2
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* SPLIT TEXT */
const splitText = document.querySelector(".split");
const words = splitText.innerText.split(" ");
splitText.innerHTML = words
  .map(word => `<span class="word">${word}</span>`)
  .join(" ");

/* HERO ANIMATION */
gsap.from(".word", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.08
});

gsap.from(".hero-sub", {
  y: 30,
  opacity: 0,
  delay: 0.6,
  duration: 1
});

gsap.from(".btn", {
  y: 20,
  opacity: 0,
  delay: 1,
  duration: 0.8
});

/* SERVICES ANIMATION */
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%"
  },
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power4.out"
});
const btn = document.querySelector(".btn");

btn.addEventListener("mousemove", e => {
  const rect = btn.getBoundingClientRect();
  btn.style.setProperty("--x", e.clientX - rect.left + "px");
  btn.style.setProperty("--y", e.clientY - rect.top + "px");
});
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: true
  },
  y: -100
});
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = Array.from({length: 80}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2 + 1,
  vx: (Math.random() - .5) * 0.3,
  vy: (Math.random() - .5) * 0.3
}));

function animateParticles() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if(p.x<0||p.x>canvas.width) p.vx *= -1;
    if(p.y<0||p.y>canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
gsap.from(".section-title", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 85%"
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});
gsap.from(".work-card", {
  scrollTrigger: {
    trigger: ".work",
    start: "top 85%"
  },
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power4.out"
});
const slider = document.querySelector(".slider");
const after = document.querySelector(".after");

slider.addEventListener("input", e => {
  after.style.width = e.target.value + "%";
});
gsap.from(".verified-box div", {
  scrollTrigger: {
    trigger: ".verified",
    start: "top 85%"
  },
  y: 60,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out"
});
gsap.from(".contact-form form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%"
  },
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});
