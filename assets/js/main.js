document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname.split('/').pop();

    let navLinks = document.querySelectorAll('.custom-nav-link');
    let dropdownLinks = document.querySelectorAll('.dropdown-content a');

    // Функция для сброса всех активных классов
    function resetActiveClasses() {
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });
        dropdownLinks.forEach(function (link) {
            link.classList.remove('active');
        });
    }

    // Функция для установки активных классов
    function setActiveClasses() {
        resetActiveClasses();

        // Обработка основного меню
        navLinks.forEach(function (link) {
            let linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentLocation) {
                link.classList.add('active');
            }
        });

        // Обработка подменю
        dropdownLinks.forEach(function (link) {
            let linkPath = link.getAttribute('href').split('/').pop();
            if (linkPath === currentLocation) {
                link.classList.add('active');
                // Выделяем родительский пункт меню "Products"
                let parentLink = link.closest('.nav-item-products').querySelector('.nav-link-products');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }
        });
    }

    setActiveClasses();


    AOS.init({
        delay: 0,
        duration: 1000,
        once: true
    });


    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const sideMenu = document.getElementById('sideMenu');
    const closeSideMenu = document.getElementById('closeSideMenu');

    if (mobileMenuButton && sideMenu && closeSideMenu) {
        mobileMenuButton.onclick = function () {
            sideMenu.classList.add('open');
        };

        closeSideMenu.onclick = function () {
            sideMenu.classList.remove('open');
        };

        window.onclick = function (event) {
            if (event.target === sideMenu) {
                sideMenu.classList.remove('open');
            }
        };
    } else {
        console.error('Menu elements not found.');
    }

    let swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'slide',
        speed: 1000,
    });
    ;

    // FAQ toggle functionality
    const faqHeaders = document.querySelectorAll('.card-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const currentCard = this.parentElement;
            const isOpen = currentCard.classList.contains('open');

            // Закрыть все другие вопросы
            document.querySelectorAll('.card').forEach(card => {
                if (card !== currentCard) {
                    card.classList.remove('open');
                }
            });

            // Переключить текущий вопрос
            if (isOpen) {
                currentCard.classList.remove('open');
            } else {
                currentCard.classList.add('open');
            }
        });
    });

    // menu link

    let navItems = document.querySelectorAll('.nav-item-products > a');

    navItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Отключаем переход по ссылке
            this.parentElement.classList.toggle('active'); // Переключаем класс active
        });
    });
});