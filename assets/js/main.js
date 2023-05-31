// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// remove menu
const navLink = document.querySelectorAll(".nav__link");

function hideMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach(n => n.addEventListener("click", hideMenu));
document.addEventListener("click", event => {
  const navMenu = document.getElementById("nav-menu");
  const hamMenu = document.querySelector(".bx-menu");
  if (!navMenu.contains(event.target) && hamMenu !== event.target) {
    hideMenu();
  }
});

// active scroll
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(
  ".home__data,.section-title, .about__img, .skills__subtitle, .skills__text"
);
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(
  ".skills__data, .contact__input, .contact__button, .home__social-icon",
  {
    interval: 200,
  }
);

const sr2 = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr2.reveal(".work__img", { interval: 200 });

const toggleIcon = document.querySelector(".toggle-theme");
toggleIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggleIcon.classList.replace("bx-moon", "bx-sun");
  } else {
    toggleIcon.classList.replace("bx-sun", "bx-moon");
  }
});
