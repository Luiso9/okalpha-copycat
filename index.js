const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const span = document.querySelector('.garis');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
});


const drawerOpenElements = document.querySelectorAll('.drawer-open');
const workCards = document.querySelectorAll('.work-card');

drawerOpenElements.forEach((drawerOpen, index) => {
    drawerOpen.addEventListener('click', () => {
        workCards[index].classList.toggle('card-open');
        drawerOpen.classList.toggle('arrow-rotate');
    });
});


const animatedBox = document.querySelector('.square');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    let translateY = scrollPos * 0.5;
    let translateX = scrollPos * 0.5;
    let translateZ = scrollPos * 0.5;

    animatedBox.style.transform = `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)`;
});

$('nav a').click(function (event) {
    var id = $(this).attr("href");
    if ($(id).length) {
        var offset = 100;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
    }
    event.preventDefault();
});