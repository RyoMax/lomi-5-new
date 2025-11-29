const menuIcon = document.getElementById("menuIcon");
const links = document.getElementById("links");

/* menu icon gets transformed and mobile menu is being displayed */
  menuIcon.addEventListener("click", () => {
    /* toggle button animation */
    menuIcon.classList.toggle("active");
    links.classList.toggle("collapsed");
  });