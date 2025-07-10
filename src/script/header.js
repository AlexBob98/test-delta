document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu');
  const menuItems = document.querySelectorAll('.header__item');

  burgerButton.addEventListener('click', () => {
      menu.classList.toggle('active'); 
      burgerButton.classList.toggle('active'); });

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          menu.classList.remove('active'); 
          burgerButton.classList.remove('active'); });
  });
});

const header = document.getElementById("header");
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
window.onscroll = function() {
  stickyHeader();
};