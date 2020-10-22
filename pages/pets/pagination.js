let fullPetsList = [];
let names = [];



fullPetsList = (() => {
    let tempArr =[];

    for (let i = 0; i < 6; i++) {
        const newPets = pets;

        for (let j = pets.length; j > 0; j--) {
            let randIndex = Math.floor(Math.random() * j);
            const randElement = newPets.splice(randIndex,1)[0];
            newPets.push(randElement);
        }

        tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
})();


const sort6List = (list) => {
    const length = list.length;

    for (let i = 0; i < (length / 6); i++) {
        const stepList = list.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            const dublicatedItem = stepList.find((item, index) => {
                return item.name === stepList[j].name && (index !== j);
            });

            if (dublicatedItem !== undefined) {
                const ind = (i * 6) + j;
                const list8 = Math.trunc(ind / 8);
                list.splice(list8 * 8, 0, list.splice(ind, 1)[0]);

                sort6List(list);
            }
        }
    }
    return list;
}

const sort863 = (list) => {
    let unique8List = [];
    const length = list.length;

    for (let i=0; i < length / 8; i++) {
        const uniqueStepList = [];
        for (j = 0; j < list.length; j++) {
            if (uniqueStepList >= 8) {
                break;
            }
            const isUnique = !uniqueStepList.some( (item) => {
                return item.name === list[j].name;
            });
            if (isUnique) {
                uniqueStepList.push(list[j]);
                list.splice(j,1);
                j--;
            }
        }
        unique8List = [...unique8List, ...uniqueStepList];
    }
    list = sort6List(unique8List);

    return list;
}

fullPetsList = sort863(fullPetsList);


const petsCardsItems = document.querySelectorAll('.pets__cards_item');
const paginationNumber = document.querySelector('.pagination_number');
const prevEnd = document.querySelector('.prev-end');
const prev = document.querySelector('.prev');
const nextEnd = document.querySelector('.next-end');
const next = document.querySelector('.next');

console.log(petsCardsItems[0].children[0]);
let currentPage = 1;
let itemsLimit = 8;

const checkItemsLimit = () => {
    if (document.querySelector('body').offsetWidth > 768 && document.querySelector('body').offsetWidth < 1280) {
        itemsLimit = 6;
    } else if (document.querySelector('body').offsetWidth < 768) {
        itemsLimit = 3;
    }
}
const createPets = () => {
        paginationNumber.textContent = currentPage;
        checkItemsLimit();
        let j = 0;
        for (let i = (currentPage - 1) * itemsLimit; i < (currentPage - 1) * itemsLimit + itemsLimit; i++) {
            petsCardsItems[j].children[0].src = fullPetsList[i].img;
            petsCardsItems[j].children[1].textContent = fullPetsList[i].name;
            j++;
        }
    }

const disable = (button) => {
    button.classList.remove('pagination_active');
    button.classList.add('pagination_disabled');
    button.setAttribute('disabled', true);
}

const active = (button) => {
    button.classList.add('pagination_active');
    button.classList.remove('pagination_disabled');
    button.removeAttribute('disabled');
}

createPets();
next.addEventListener('click', () => {
    currentPage++;
    if (currentPage === (fullPetsList.length / itemsLimit)) {
        disable(next);
        disable(nextEnd);
    } else if(prev.classList.contains('pagination_disabled')) {
            active(prev);
            active(prevEnd);
        }
        createPets();
});

nextEnd.addEventListener('click', () => {
        disable(next);
        disable(nextEnd);
        currentPage = fullPetsList.length / itemsLimit;
        if(prev.classList.contains('pagination_disabled')) {
            active(prev);
            active(prevEnd);
        }
        createPets();
});

prev.addEventListener('click', () => {
    currentPage--;
    if (currentPage === 1) {
        disable(prev);
        disable(prevEnd);
    } else if(next.classList.contains('pagination_disabled')) {
        active(next);
        active(prevnextEnd);
    }
    createPets();
});

prevEnd.addEventListener('click', () => {
    disable(prev);
    disable(prevEnd);
    currentPage = 1;
    if(next.classList.contains('pagination_disabled')) {
        active(next);
        active(nextEnd);
    }
    createPets();
});

console.log(fullPetsList);

