const hamburgerElement = document.getElementsByClassName("i-hamburger");
const dropdownElements = document.getElementsByClassName("nav__dropdown");

const dropdowns = [];

for (let i = 0; i < dropdownElements.length; i++) {
  const navLink = dropdownElements[i].querySelector(".nav__link");
  const dropdownIcon = dropdownElements[i].querySelector(".dropdown__icon");
  const dropdownSubnav = dropdownElements[i].querySelector(".dropdown__subnav");

  dropdowns.push({
    parent: dropdownElements[i],
    dropdownIcon,
    navLink,
    dropdownSubnav,
    key: i,
  });
}

function navigation(mobileQuery) {
  if (mobileQuery.matches) {
    let activeDropdown = -1;
    let prevActiveDropdown = -1;

    for (let dropdown of dropdowns) {
      dropdown.parent.addEventListener("click", () => {
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
  } else {
  }
}

var mobileQuery = window.matchMedia("(max-width: 800px)");
navigation(mobileQuery);
mobileQuery.addEventListener("change", navigation);
