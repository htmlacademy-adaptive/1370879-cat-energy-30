/* eslint-disable no-console */
/* в этот файл добавляет скрипты*/
const activePage = window.location.pathname;
const navMain = document.querySelector('.site-navigation');
const navToggle = document.querySelector('.site-navigation__toggle');
// const navItems = navMain.querySelectorAll('.site-navigation__item');
const navLinks = navMain.querySelectorAll('.site-navigation__item .site-navigation__link');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('site-navigation--closed')) {
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--opened');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--opened');
  }
});

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('site-navigation__link--current');
  }
});

console.log(navLinks);
