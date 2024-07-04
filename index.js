const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible") === "true";
  nav.setAttribute("data-visible", !isVisible);
  navToggle.setAttribute("aria-expanded", !isVisible);
});


// const toggleMenu = (visibility) => nav.setAttribute('data-visible', visibility);
// const iconVisibility = (visibility) => navToggle.setAttribute('aria-expanded', visibility);
// navToggle.addEventListener('click', toggleMenu("false"));
// closeToggle.addEventListener('click', toggleMenu("false"));
