//Toggle Navbar
const navbarNav = document.querySelector(".navbar-nav");
// when hamburger menu is clicked
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

//remove hamburger menu when mouse is not on hamburger and navbar
const hamburger = document.querySelector("#hamburger");
const search = document.querySelector("#search-btn");
const cart = document.querySelector("#cart-btn");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cart.contains(e.target) && !shopping.contains(e.target)) {
    shopping.classList.remove("active");
  }
});

//cart toggle
const shopping = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shopping.classList.toggle("active");
};

//toogle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// modal box
const itemDetail = document.querySelector("#item-detail-modal");
const itemButton = document.querySelectorAll(".item-detail-btn");

itemButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetail.style.display = "flex";
    e.preventDefault();
  };
});

//modal box close
document.querySelector(".modal .close").onclick = (e) => {
  itemDetail.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetail) {
    itemDetail.style.display = "none";
  }
};
