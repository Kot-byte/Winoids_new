document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname.split('/').pop();
    let navLinks = document.querySelectorAll('.custom-nav-link');

    navLinks.forEach(function (link) {
        let linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentLocation) {
            link.classList.add('active');
        }
    });
});


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


