document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.header__burger');
    const headerWrapper = document.querySelector('.header__wrapper');

    // Перевіряємо, чи існують елементи на сторінці, щоб уникнути помилок
    if (burgerButton && headerWrapper) {
        burgerButton.addEventListener('click', () => {
            // Перемикаємо клас для відкриття/закриття меню
            headerWrapper.classList.toggle('is-open');

            // Змінюємо вигляд іконки (☰ на ✕ і назад) та aria-label
            if (headerWrapper.classList.contains('is-open')) {
                burgerButton.textContent = '✕';
                burgerButton.setAttribute('aria-label', 'Close menu');
            } else {
                burgerButton.textContent = '☰';
                burgerButton.setAttribute('aria-label', 'Open menu');
            }
        });
    }
});
