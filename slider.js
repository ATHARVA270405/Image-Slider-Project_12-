const items = document.querySelectorAll('.items');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const background = document.querySelector('.slider-background');

let currentIndex = 0;

function updateSlider() {
    // Remove all active, left, and right classes
    items.forEach(item => {
        item.classList.remove('active', 'left', 'right');
    });

    // Add active class to the current item
    items[currentIndex].classList.add('active');

    // Set the left and right items
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    const nextIndex = (currentIndex + 1) % items.length;

    items[prevIndex].classList.add('left');
    items[nextIndex].classList.add('right');

    // Change background image
    const activeImage = items[currentIndex].querySelector('img').src;
    background.style.backgroundImage = `url(${activeImage})`;
}

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
});

// Initialize slider on page load
updateSlider();
