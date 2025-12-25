gsap.registerPlugin(ScrollTrigger)

// Smooth Scroll
const lenis = new Lenis({ smooth: true })
function raf(t) {
  lenis.raf(t)
  ScrollTrigger.update()
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// HERO cinematic entrance
gsap.from(".hero-inner *", {
  y: 140,
  opacity: 0,
  stagger: 0.12,
  duration: 1.6,
  ease: "power4.out"
})

// Section scroll reveals
document.querySelectorAll("section").forEach(section => {
  gsap.from(section.children, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 120,
    opacity: 0,
    stagger: 0.15,
    duration: 1.3,
    ease: "power4.out"
  })
})

// Card hover lift
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { y: -18, scale: 1.05, duration: 0.3 })
  })
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { y: 0, scale: 1, duration: 0.3 })
  })
})
