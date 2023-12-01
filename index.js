const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 30
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

let opens = document.getElementById("nav-toggle");
let closed = document.getElementById("nav-close");
let searchopen = document.getElementById("nav-search");
let searchclose = document.getElementById("search-close");
let cartclose = document.getElementById("cart-close");
let cartopen = document.getElementById("cart-open");

opens.onclick = () => {
  document.getElementById("cart").classList.remove("open");
  document.getElementById("search-mobile").classList.remove("open");
  document.getElementById("nav-menu").classList.add("open");
};
closed.onclick = () => {
  document.getElementById("nav-menu").classList.remove("open");
};

searchopen.onclick = () => {
  document.getElementById("cart").classList.remove("open");
  document.getElementById("nav-menu").classList.remove("open");
  document.getElementById("search-mobile").classList.add("open");
};
searchclose.onclick = () => {
  document.getElementById("search-mobile").classList.remove("open");
};
cartopen.onclick = () => {
  document.getElementById("nav-menu").classList.remove("open");
  document.getElementById("search-mobile").classList.remove("open");
  document.getElementById("cart").classList.add("open");
};
cartclose.onclick = () => {
  document.getElementById("cart").classList.remove("open");
};
