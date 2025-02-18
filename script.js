const images = [
    'assets/image_1.jpg',
    'assets/image_2.jpeg',
    'assets/image_3.jpeg'
];

let currentIndex = 0;
const imgElement = document.getElementById('images');
const leftButton = document.querySelector('#arrow_left button');
const rightButton = document.querySelector('#arrow_right button');

function updateCarousel() {
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 1;
    }, 300);
    
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex === images.length - 1;
}

function changeImageLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function changeImageRight() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

rightButton.onclick = changeImageRight;
leftButton.onclick = changeImageLeft;

window.onload = () => {
    imgElement.src = images[currentIndex];
    updateCarousel();
};