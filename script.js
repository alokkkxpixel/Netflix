function Animation() {
  gsap.from(".sec1-img", {
    opacity: 0,
    y: 100,
    duration: 0.5,

    scrollTrigger: {
      trigger: ".sec1-img",
      start: "top center",
      end: "bottom center",
      // markers: true,
      // scrub: 3,
    },
  });
  gsap.from(".sec1Para", {
    opacity: 0,
    y: 50,
    duration: 0.4,

    scrollTrigger: {
      trigger: ".sec1Para",
      start: "top center",
      end: "bottom center",
      // markers: true,
    },
  });
  gsap.from(".sec2img", {
    opacity: 0,
    y: 100,
    duration: 0.5,

    scrollTrigger: {
      trigger: ".sec2img",
      start: "top 60%",
      end: "bottom 60%",
      // markers: true,
      // scrub: 3,
    },
  });

  gsap.from(".sec2Para", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    //   stagger: 0.,
    scrollTrigger: {
      trigger: ".sec2Para",
      start: "top 60%",
      end: "bottom 60%",
      // markers: true,
      // scrub: 3,
    },
  });

  gsap.from(".faqhead", {
    opacity: 0,
    y: 10,
    duration: 0.2,
    scrollTrigger: {
      trigger: ".faqhead",
      start: "top center",
      end: "bottom center",
      // markers: true,
      scrub: 3,
    },
  });
}
Animation();
// function SmoothScroll() {
//   let scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//     lerp: 0.07,
//     multiplier: 1.1,
//     smartphone: {
//       smooth: true,
//     },
//   });
// }
// SmoothScroll();
function loader() {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 3000);
  });
}
loader();
