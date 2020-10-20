//header

const menu = document.querySelector('.navigation');
menu.querySelectorAll('li');

menu.addEventListener('click', (e) => {
    if (!(e.target.classList.contains('none'))) {
        menu.querySelectorAll('li a').forEach(el => {
            el.classList.remove('navigation__link_active');
        });
        e.target.classList.add('navigation__link_active');
    }
})



//burger menu
const hamburger = document.querySelector('.hamburger'),
    hamburger_top = document.querySelector('.hamburger_top'),
    navigation = document.querySelector('.navigation'),
    navigationItem = document.querySelectorAll('.navigation__item'),
    headerColor = document.querySelector('.header'),

    header = document.querySelector('.header-pets__wrapper'),
    nextScreen = document.querySelector('.pets');
    hamburger__line_top = document.querySelector('.hamburger__line_top'),
    body = document.querySelector('body');


hamburger.addEventListener('click', () => {
    headerColor.classList.remove('header');
    header.classList.add('subMenu');
    hamburger_top.classList.add('hamburger_sub');
    hamburger_top.classList.remove('hamburger_top');
    nextScreen.classList.add('margin-top');
    header.classList.add('open');
    body.classList.add('menu');
    setTimeout( () => {
        hamburger_top.classList.add('rotated');
    }, 500);
    hamburger_top.classList.remove('rotated');


});


const closeSubMenu = () => {
    header.classList.add('close');
    hamburger_top.classList.remove('hamburger_top');
    header.classList.remove('open');
    hamburger_top.classList.add('rotated');
    setTimeout( () => {
        hamburger_top.classList.add('hamburger_top');
        header.classList.remove('subMenu');
        header.classList.remove('close');
    }, 700);

    hamburger_top.classList.remove('rotated');
    setTimeout( () => {
        body.classList.remove('menu');
        nextScreen.classList.remove('margin-top');
        headerColor.classList.add('header');
    }, 700);
};

document.addEventListener('click', e => {
    let target = e.target;
    console.log(target);
    let itsMenu = target == header || header.contains(target);
    console.log(header.contains(target));

    let itsHamburger = target == hamburger__line_top;
    console.log(target == hamburger__line_top);

    if (body.classList.contains('menu') && (!itsMenu || itsHamburger)) {
        closeSubMenu();
    }
})

