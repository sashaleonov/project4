var swiper = new Swiper (".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    mousewhell: true,
    keyboard: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 1200,

});


const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

scrollUpSvgPath.style.strokeDasharry = '${pathLength} ${pathLength}';
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
    
};


window.addEventListener('scroll', () => {
    updateDashoffset();
    if (getTop()>offset) {
        scrollUp.classList.add('scroll-up--active')
    } else {
        scrollUp.classList.remove('scroll-up--active')
    }
});


scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        bevavior: 'smooth'
    });
});


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")
    })
});

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".header").classList.remove("open")
});

$(document).ready(()=> {
    $(document).on('click', '.header__burger-btn', ()=> {
        $('.header__burger-btn, .nav-link').toggleClass('open');
        $('body').toggleClass('lock');
    });
    $(document).on('click', '.nav-link > li > a', e => {
    });
});
