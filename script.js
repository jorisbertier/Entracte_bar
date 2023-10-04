//navbar
window.addEventListener("scroll", function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const menuToggle = document.querySelector('.menu-hamburger');
const menuBg = document.querySelector('.menu-bg');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('menu-open');
    menuBg.classList.toggle('menu-bg-open');
    document.body.classList.toggle('menu-open');
});

menuBg.addEventListener('click', function () {
    menu.classList.remove('menu-open');
    menuBg.classList.remove('menu-bg-open');
    document.body.classList.remove('menu-open');
});

menu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        menu.classList.remove('menu-open');
        menuBg.classList.remove('menu-bg-open');
        document.body.classList.remove('menu-open');
    }
});

let menuToggles = document.querySelector('.menu-hamburger');
let body = document.getElementById('body');

menuToggles.addEventListener('click', function () {

    body.classList.toggle('menu-open');
});


/// reveal

window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

let stickySection = document.getElementById("sticky-section");
let stickySectionPosition = stickySection.offsetTop;

window.addEventListener("scroll", function () {
    if (window.pageYOffset > stickySectionPosition) {
        stickySection.style.position = "fixed";
        stickySection.style.top = "0";
        stickySection.style.right = "0";
    } else {
        stickySection.style.position = "static";
    }
});

window.addEventListener('resize', function () {
    var windowHeight = window.innerHeight;

    if (windowHeight < 1000) {
        document.querySelector('#sticky-section h3:nth-child(1)').style.fontSize = '14px';
    } else {
        document.querySelector('#sticky-section h3:nth-child(1)').style.fontSize = '';
    }

    if (windowHeight >= 1000 && windowHeight < 1500) {
        // Réduire la taille du deuxième élément lorsque la hauteur est comprise entre 1000px et 1500px
        document.querySelector('#sticky-section h3:nth-child(2)').style.fontSize = '14px';
    } else {
        document.querySelector('#sticky-section h3:nth-child(2)').style.fontSize = '';
    }

    if (windowHeight >= 1500) {
        document.querySelector('#sticky-section h3:nth-child(3)').style.fontSize = '14px';
    } else {
        document.querySelector('#sticky-section h3:nth-child(3)').style.fontSize = '';
    }
});


