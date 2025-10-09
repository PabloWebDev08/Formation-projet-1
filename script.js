const btnHamburgerMenu = document.getElementById("menu-hamburger");
const navMenu = document.getElementById("primary-nav");

btnHamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav-display");
  console.log(navMenu.className);
});
