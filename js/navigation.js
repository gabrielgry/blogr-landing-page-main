const hamburger = document.getElementsByClassName("i-hamburger")[0];
const navContainer = document.getElementsByClassName("nav__container")[0];
const dropdownElements = document.getElementsByClassName("nav__dropdown");

const dropdowns = [];

for (let i = 0; i < dropdownElements.length; i++) {
  dropdowns.push({
    parent: dropdownElements[i],
    dropdownIcon: dropdownElements[i].querySelector(".dropdown__icon"),
    navLink: dropdownElements[i].querySelector(".nav__link"),
    dropdownSubnav: dropdownElements[i].querySelector(".dropdown__subnav"),
    key: i,
  });
}

function handleDropdownMobile() {
  let activeDropdown = -1;
  let prevActiveDropdown = -1;

  for (let dropdown of dropdowns) {
    dropdown.navLink.addEventListener("click", () => {
      if (activeDropdown !== dropdown.key) {
        prevActiveDropdown = activeDropdown;
        activeDropdown = dropdown.key;
        dropdown.dropdownSubnav.classList.add("dropdown__subnav--show");
        dropdown.dropdownIcon.classList.add("i-arrow--active");
      } else {
        prevActiveDropdown = -1;
        activeDropdown = -1;
        dropdown.dropdownSubnav.classList.remove("dropdown__subnav--show");
        dropdown.dropdownIcon.classList.remove("i-arrow--active");
      }

      if (prevActiveDropdown !== -1) {
        dropdowns[prevActiveDropdown].dropdownSubnav.classList.remove(
          "dropdown__subnav--show"
        );
        dropdowns[prevActiveDropdown].dropdownIcon.classList.remove(
          "i-arrow--active"
        );
      }
    });
  }
}

function handleDropdownDesktop() {
  for (let dropdown of dropdowns) {
    dropdown.parent.addEventListener("mouseenter", () => {
      dropdown.dropdownIcon.classList.add("i-arrow--active");
    });
    dropdown.parent.addEventListener("mouseleave", () => {
      dropdown.dropdownIcon.classList.remove("i-arrow--active");
    });
  }
}

function handleHamburgerMenu() {
  hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("nav__container--hidden");
    hamburger.classList.toggle("i-close");
  });
}

function navigation(mobileQuery) {
  if (mobileQuery.matches) {
    handleDropdownMobile();
    handleHamburgerMenu();
  } else {
    handleDropdownDesktop();
  }
}

var mobileQuery = window.matchMedia("(max-width: 800px)");
navigation(mobileQuery);
mobileQuery.addEventListener("change", navigation);

//Hamburger menu
