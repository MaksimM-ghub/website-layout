const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav-middle");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
  burger.classList.toggle("open");
});

menu.addEventListener("click", (event) => {
  menu.classList.remove("open");
  burger.classList.remove("open");
});
