//main header

const logo = document.querySelector('.logo');
const menu = document.querySelector('.navigation');
const buttonCentered = document.querySelector('.button-centered');
const buttonRest = document.querySelector('.button-rest');
menu.querySelectorAll('li');

menu.addEventListener('click', (e) => {
    if (!(e.target.classList.contains('none'))) {
        menu.querySelectorAll('li a').forEach(el => {
            el.classList.remove('navigation__link_active');
        });
        e.target.classList.add('navigation__link_active');
    }
})

buttonCentered.addEventListener('click', () => {
    location.href = '../pets/pets.html';
})

buttonRest.addEventListener('click', () => {
    location.href = '../pets/pets.html';
})

//burger menu
const hamburger = document.querySelector('.hamburger'),
        hamburger_top = document.querySelector('.hamburger_top'),
        navigation = document.querySelector('.navigation'),
        navigationItem = document.querySelectorAll('.navigation__item')
        header = document.querySelector('.header__wrapper'),
        startScreen = document.querySelector('.start-screen');
        hamburger__line_top = document.querySelector('.hamburger__line_top'),
        body = document.querySelector('body');


hamburger.addEventListener('click', () => {
    body.classList.add('body-hidden');
    header.classList.add('subMenu');
    hamburger_top.classList.add('hamburger_sub');
    hamburger_top.classList.remove('hamburger_top');
        startScreen.classList.add('margin-top');
    header.classList.add('open');
    body.classList.add('menu');
    setTimeout( () => {
        hamburger_top.classList.add('rotated');
    }, 500);
     hamburger_top.classList.remove('rotated');
});


const closeSubMenu = () => {
    body.classList.remove('body-hidden');
    header.classList.add('close');
    header.classList.add('header');
    hamburger_top.classList.remove('hamburger_top');
    header.classList.remove('open');
    hamburger_top.classList.add('rotated2');

    setTimeout( () => {
        hamburger_top.classList.add('hamburger_top');
        header.classList.remove('subMenu');
        body.classList.remove('menu');
        header.classList.remove('close');
        startScreen.classList.remove('margin-top');
        hamburger_top.classList.remove('rotated');
        hamburger_top.classList.remove('rotated2');

    }, 700);
};

document.addEventListener('click', e => {
    let target = e.target;
    let itsMenu = target == header || header.contains(target);
    let itsHamburger = target == hamburger__line_top;
    let itsHamburger2 = target == hamburger_top;
    if (body.classList.contains('menu') && (!itsMenu || itsHamburger || itsHamburger2)) {
       closeSubMenu();
   }
})



