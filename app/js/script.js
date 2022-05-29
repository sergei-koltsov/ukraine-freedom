//BURGER MENU
let burgerbtn = document.querySelector('.header-mobile__burg');
let mobileMenu = document.querySelector('.header-mobile .header__inner');

burgerbtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  burgerbtn.classList.toggle('active');
})