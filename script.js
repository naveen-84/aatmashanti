document.addEventListener("DOMContentLoaded", () => {
  let isMobile = false;
  let isHamburgerMenuOpen = false;

  const toggleHeader = () => {
    const hamburgerMenu = document.querySelector("#hamburger_menu");
    const openHamburgerIcon = document.querySelector("#open_hamburger");
    const closeHamburgerIcon = document.querySelector("#close_hamburger");
    const navbar = document.querySelector("header .navbar");

    const toggleHamburgerMenu = () => {
      if (isHamburgerMenuOpen) {
        openHamburgerIcon.style.display = "none";
        closeHamburgerIcon.style.display = "block";
        navbar.className = "navbar open";
      } else {
        openHamburgerIcon.style.display = "block";
        closeHamburgerIcon.style.display = "none";
        navbar.className = "navbar";
      }
    };

    if (isMobile) {
      hamburgerMenu.style.display ="block";
      hamburgerMenu.addEventListener("click", () => {
        if (isHamburgerMenuOpen) {
          isHamburgerMenuOpen = false;
        } else {
          isHamburgerMenuOpen = true;
        }
        toggleHamburgerMenu();
      });
    } else {
      hamburgerMenu.style.display ="none";
    }
    toggleHamburgerMenu();
  };

  const toggleIsMobile = () => {
    if (window.innerWidth < 768) {
      isMobile = true;
    } else {
      isMobile = false;
    }
  };
  toggleIsMobile();
  toggleHeader();
});

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
