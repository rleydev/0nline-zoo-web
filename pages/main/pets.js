
const leftArrowButton = document.getElementById('left-arrow-button');
const rightArrowButton = document.getElementById('right-arrow-button');



let items = document.querySelectorAll('.pets-container');
let currentItem = 0;
let isEnabled = true;


function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);

    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction)
    });

}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);

    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction)
        this.classList.add('active');
        isEnabled = true
    });

}

function setPreviousItem(n) {
    hideItem('to-right')
    changeCurrentItem(n - 1)
    showItem('from-left')
}

function setNextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n + 1)
    showItem('from-right')
}

window.addEventListener('DOMContentLoaded', e => {
    
    leftArrowButton.addEventListener('click', e => {

        e.preventDefault()
        console.dir('left arrow button clicked')

        if (isEnabled) {
            setPreviousItem(currentItem)
        }

    })

    rightArrowButton.addEventListener('click', e => {

        e.preventDefault()
        console.dir('right arrow button clicked')

        if (isEnabled) {
            setNextItem(currentItem);
        }

    })
    
})

