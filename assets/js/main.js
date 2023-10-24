//Toggle Navbar
const navbarNav = document.querySelector(".navbar-nav");
// when hamburger menu is clicked
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

//remove hamburger menu when mouse is not on hamburger and navbar
const hamburger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
