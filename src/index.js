import './style.css';

//toggle navigation icon
const navElm = document.querySelector('nav');
const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

document
  .querySelectorAll('nav a')
  .forEach((navItem) =>
    navItem.addEventListener('click', () =>
      navElm.classList.toggle('nav-closed'),
    ),
  );

//order drink
let ordered = false;
const drinkCup = document.querySelector('.drink__cup');
const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
  if (!ordered) {
    orderBtn.textContent = 'Zrušit';
    drinkCup.classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtn.textContent = 'Objednat';
    drinkCup.classList.remove('drink__cup--selected');
    ordered = false;
  }
});
