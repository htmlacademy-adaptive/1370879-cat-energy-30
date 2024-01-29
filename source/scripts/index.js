/* eslint-disable no-console */
/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.site-navigation');
const navToggle = document.querySelector('.site-navigation__toggle');

navToggle.addEventListener('click', () => {
  console.log('clicked');
  if (navMain.classList.contains('site-navigation--closed')) {
    console.log('clicked');
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--opened');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--opened');
  }
});

// const a = 'my sleep';

// console.log(a);
