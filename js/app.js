//  NAV ANIMATION SLIDE
const navSlider = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_content-ul');
  const navLinks = document.querySelectorAll('.nav_content-ul li');

  function animation() {
    // Toogle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {

      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .5s ease forwards ${index / 5 + .5}s`;
      }
    });

    // Burger
    burger.classList.toggle('toggle');
  }

  // Event on burger click
  burger.addEventListener('click', () => {
    animation();

  });

  // Event on link click
  nav.addEventListener('click', () => {

    animation();
  });
}

navSlider();