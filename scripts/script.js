// Меню бургер
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.site-menu');
burger.addEventListener('click', function(e) {
    burger.classList.toggle('lock')
    menu.classList.toggle('active');
});