function locoscroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




}
function cursorEffect() {
  let page1 = document.querySelector(".page1");
  let cursor = document.querySelector(".cursor");

  page1.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });
  page1.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });
}

function page2animation(){
  gsap.from(".page2 .top ", {
    y: 30,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 75%",
      end: "top 72%",
      // markers: true,
      scrub: 2,
    },
  });
  gsap.from(".page2-mid p", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 69%",
      end: "top 66%",
      // markers:true,
      scrub: 2,
    },
  });
  gsap.to(".page2 .line",{
    width:"100%",
    duration:1,
    scrollTrigger:{
      trigger: ".page2",
      scroller: ".main",
      start: "top 75%",
      end: "top 58%",
      // markers: true,
      scrub: 2,
    }
  })
}
 

function page4animation(){
  gsap.from(".page4 .top ", {
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 75%",
      end: "top 72%",
      // markers: true,
      scrub: 2,
    },
  });
  gsap.from(".page4-mid p",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 66%",
      end:"top 66%",
      // markers:true,
      scrub:2
    },

  });
  
  gsap.to(".page4 .line",{
    width:"100%",
    duration:1,
    scrollTrigger:{
      trigger: ".page4",
      scroller: ".main",
      start: "top 85%",
      end: "top 65%",
      // markers: true,
      scrub: 2,
    },
  });

}
  
  function page5animation(){
  
    let page5 = document.querySelector(".page5");
    let pointer = document.querySelector(".pointer");

    page5.addEventListener("mousemove", function (dets) {
      gsap.to(pointer, {
        x: dets.x,
        y: dets.y,
      });
    });
    page5.addEventListener("mouseenter", function (dets) {
      gsap.to(pointer, {
        opacity: 1,
        scale: 1,
      });
    });
    page5.addEventListener("mouseleave", function (dets) {
      gsap.to(pointer, {
        opacity: 0,
        scale: 0,
      });
    });
  }


  function page6animation(){
    gsap.to(".line",{
      width:"100%",
      stagger:0.2,
      duration:1,
      scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        start:"top 79%",
        end:"top 55%",
        // markers:true,
        scrub:2
      },
    });
    gsap.from(".page6 .top",{
      y:40,
      stagger:0.2,
      duration:1,
      scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        start:"top 75%",
        end:"top 72%",
        // markers:true,
        scrub:2
      },
    });
    gsap.from(".page6 .mid p",{
      y:120,
      stagger:0.2,
      duration:1,
      scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        start:"top 66%",
        end:"top 66%",
        // markers:true,
        scrub:2
      }
    })
  }
  












locoscroll();
cursorEffect();
page2animation();
page4animation();
page5animation();
page6animation();