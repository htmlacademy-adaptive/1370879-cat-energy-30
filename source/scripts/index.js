/* eslint-disable no-console */
/* в этот файл добавляет скрипты*/
const activePage = window.location.pathname;
const navMain = document.querySelector('.site-navigation');
const navToggle = document.querySelector('.site-navigation__toggle');

const navLinks = navMain.querySelectorAll('.site-navigation__item').forEach((link) => {
  console.log(this, link);

  // Выяснить почему контекс равен undefined
});

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('site-navigation--closed')) {
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--opened');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--opened');
  }
});

console.dir(activePage);

console.log(navLinks);
