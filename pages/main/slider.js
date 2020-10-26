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
    currentPage++;
    console.log(fullPetsList);
    if (currentPage === (fullPetsList.length / itemsLimit) + 1) {
        currentPage = 1;
    }

     let j = 0;
     checkItemsLimitSlider();

    let dublicate = 1;
    const preview = currentPage;
    if (currentPage > 1) {
        while (dublicate != 0) {
            dublicate = 0;
            for (let i = (currentPage - 1) * itemsLimit; i < (currentPage - 1) * itemsLimit + itemsLimit; i++) {
                for (let k = 1; k <= itemsLimit; k++) {
                    if (fullPetsList[i].name == fullPetsList[(preview - 1) * itemsLimit - k].name) {
                        getFullPetsList();
                        dublicate = 1;
                         if (currentPage === (fullPetsList.length / itemsLimit) + 1) {
                             currentPage = 1;
                         }
                    }
                }
            }

        }
    }

    for (let i = (currentPage - 1) * itemsLimit; i < (currentPage - 1) * itemsLimit + itemsLimit; i++) {

        petsCardsItems[j].children[0].src = sliderList[i].img;
        petsCardsItems[j].children[1].textContent = sliderList[i].name;
        j++;
    }


}


rightArrow.addEventListener('click', () => {

    petsCardsItems.forEach(card => { card.classList.remove('animation')});
    void rightArrow.offsetWidth;
    petsCardsItems.forEach(card => { card.classList.add('animation')});

    createPetsSlider();

});

leftArrow.addEventListener('click', () => {
    petsCardsItems.forEach(card => { card.classList.remove('animation')});
    void rightArrow.offsetWidth;
    petsCardsItems.forEach(card => { card.classList.add('animation')});
    createPetsSlider();
});

createPetsSlider();
