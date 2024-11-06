document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".header__links");
  const currentPage = window.location.pathname;
  const links = document.querySelectorAll(".header__link-page");

  switch (currentPage) {
    case "/catalog-page.html":
      block.classList.remove("visually-hidden");
      let linksCatalog = Array.from(links).slice(4, 6);
      linksCatalog.forEach((link) => {
        link.style.display = "none";
      });
      break;
    case "/product-d31.html":
      block.classList.remove("visually-hidden");
      links[3].classList.remove("header__link-page--active");
      let linksProduct = Array.from(links).slice(5);
      linksProduct.forEach((link) => {
        link.style.display = "none";
      });
      break;
    case "/cooperation-suppliers.html":
      block.classList.remove("visually-hidden");
      let linksCooperation = Array.from(links).slice(1, 5);
      linksCooperation.forEach((link) => {
        link.style.display = "none";
      });
      break;
  }
});

