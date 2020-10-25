const leftArrow = document.querySelector('.slider-button');
const rightArrow = document.querySelector('.slider-button_reverse');
itemsLimit = 3;

const checkItemsLimitSlider = () => {
    if (document.querySelector('body').offsetWidth > 768 && document.querySelector('body').offsetWidth < 1280) {
        itemsLimit = 2;
    } else if (document.querySelector('body').offsetWidth < 768) {
        itemsLimit = 1;
    }
}

const createPetsSlider = () => {
    let j = 0;
    checkItemsLimitSlider();
    if ( itemsLimit === 1 && petsCardsItems[j].children[1].textContent == fullPetsList[currentPage-1].name) {
        currentPage = 1;
    }

    for (let i = (currentPage - 1) * itemsLimit; i < (currentPage - 1) * itemsLimit + itemsLimit; i++) {

        petsCardsItems[j].children[0].src = fullPetsList[i].img;
        petsCardsItems[j].children[1].textContent = fullPetsList[i].name;
        j++;
    }
}


rightArrow.addEventListener('click', () => {
    currentPage++;
    petsCardsItems.forEach(card => { card.classList.remove('animation')});
    void rightArrow.offsetWidth;
    petsCardsItems.forEach(card => { card.classList.add('animation')});
    if (currentPage === (fullPetsList.length / itemsLimit) + 1) {
        currentPage = 1;
    }
    createPetsSlider();

});

leftArrow.addEventListener('click', () => {
    currentPage--;
    petsCardsItems.forEach(card => { card.classList.remove('animation')});
    void rightArrow.offsetWidth;
    petsCardsItems.forEach(card => { card.classList.add('animation')});
    if (currentPage === 0) {
        currentPage = fullPetsList.length / itemsLimit;
    }
    createPetsSlider();
});

createPetsSlider();
