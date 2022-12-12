const btnNav = document.querySelector(".menu-btn");
const navDiv = document.querySelector(".nav-div");
const menuBtn = document.querySelector(".menu-btn");
btnNav.addEventListener("click", function (e) {
  e.preventDefault();
  navDiv.classList.toggle("hidden");
  menuBtn.classList.toggle("nav-open");
});
// STICKY NAV
const navContainer = document.querySelector(".navigation");
// const hero = document.querySelector(".section-projects");
// const heroOps = (entries, observe) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       navContainer.classList.add("sticky");
//     }
//     // observe.unobserve(hero);
//   });
// };
// const heroObs = new IntersectionObserver(heroOps, {
//   rootMargin: "20px",
//   threshold: 0.2,
// });
// heroObs.observe(hero);

// SMOOTH SCROLL
document.querySelector(".nav-list").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
