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