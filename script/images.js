// Массив с URL изображений
const images = ["/image/ерхан1.jpg", "/image/ерхан2.jpg"];
let currentImageIndex = 0;

function showImage(index) {
    const slideImage = document.getElementById("slideImage");
    slideImage.src = images[index];
}

// Функция для следующего изображения
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

// Функция для предыдущего изображения
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}
