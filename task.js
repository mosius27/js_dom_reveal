// Функция, которая проверяет, виден ли элемент на странице
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки события прокрутки
function handleScroll() {
    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Вызываем функцию handleScroll() один раз при загрузке страницы, чтобы установить начальное состояние элементов
window.addEventListener('load', handleScroll);