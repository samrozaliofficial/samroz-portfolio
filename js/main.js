console.log("Samroz Portfolio Loaded");
document.querySelectorAll('.reveal').forEach((el)=>{
  gsap.from(el,{
    opacity:0,
    y:80,
    duration:1.2,
    ease:"power4.out",
    scrollTrigger:{
      trigger:el,
      start:"top 85%"
    }
  })
})
