// Скрипт для прокрутки вниз
document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

