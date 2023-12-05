// Отримуємо елементи, з якими будемо працювати
const burgerMenuBtn = document.querySelector('.header__burger-menu-btn');
const headerNav = document.querySelector('.header__nav');
const body = document.body;

// Додаємо обробник події для кнопки бургер-меню
burgerMenuBtn.addEventListener('click', function() {
    // Тогл класу 'active' для бургер-меню кнопки
    this.classList.toggle('active');
    // Тогл класу 'active' для навігаційного меню
    headerNav.classList.toggle('active');
    // Тогл класу 'active' для body, щоб заблокувати/розблокувати прокрутку
    body.classList.toggle('active');
});

// Додаємо обробники подій для зміни розмірів вікна
window.addEventListener('resize', function() {
    // Отримуємо ширину вікна
    const windowWidth = window.innerWidth;

    // Перевірка розміру вікна для виконання певних дій
    if (windowWidth <= 1024) {
        // Додаткові дії для розмірів вікна менше або рівно 1024px
    } else if (windowWidth > 1024 && windowWidth < 1440) {
        // Додаткові дії для розмірів вікна більше 1024px та менше 1440px
    } else {
        // Додаткові дії для розмірів вікна більше або рівно 1440px
    }
});
