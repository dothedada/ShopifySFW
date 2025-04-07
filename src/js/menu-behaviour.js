export const menuBehaviour = () => {
    const menuBtn = document.querySelector('.header__hamburguer');
    const menu = document.querySelector('.header__menu');
    const payment = document.querySelector('.header__payment-methods');
    const backdrop = document.querySelector('.backdrop');

    const toggleElements = () => {
        menuBtn.classList.toggle('header__hamburguer--open');
        menu.classList.toggle('header__menu--open');
        payment.classList.toggle('header__menu--open');
        backdrop.classList.toggle('backdrop--open');
        document.body.classList.toggle('block');
    };

    menuBtn.addEventListener('click', toggleElements);
    menu.addEventListener('click', () => setTimeout(toggleElements, 150));
};
