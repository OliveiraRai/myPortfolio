// MENU MOBILE
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// FECHAR MENU AO CLICAR NOS LINKS
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  });
});

// CARROSSEL DE TECNOLOGIAS
const carousel = document.querySelector(".tech-carousel");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");

let scrollAmount = 0;

btnRight.addEventListener("click", () => {
  carousel.scrollBy({ left: 200, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  carousel.scrollBy({ left: -200, behavior: "smooth" });
});
