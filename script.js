const hamburgerButton = document.querySelector(".hamburger-btn");
const menuContainer = document.querySelector(".mobile-menu-container");

/* Clicking the hamburger button will toggle the display of the mobile menu between Block and None */
const menuToggle = () => {
  menuContainer.style.display === "block" ? menuContainer.style.display = "none" : menuContainer.style.display = "block";
}

hamburgerButton.addEventListener("click", menuToggle);

/* If the mobile menu is currently visible, clicking anywhere on the page that is neither the menu nor the hamburger button, will cause it to close. */
document.addEventListener("click", (event) => {
  const withinBoundaries = event.composedPath().includes(menuContainer);
  if (menuContainer.style.display === "block" && !withinBoundaries && event.target !== hamburgerButton) {
    menuToggle();
  }
});


