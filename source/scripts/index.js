/* eslint-disable no-console */
/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.site-navigation');
const navToggle = document.querySelector('.site-navigation__toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('site-navigation--closed')) {
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--opened');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--opened');
  }
});
