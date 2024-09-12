

let swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 800,
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    mousewheel: {
        invert: false
    },
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
});


const menu = document.querySelector('.menu');
const headerInner = document.querySelector('#header .inner');

console.log(headerInner);

menu.addEventListener('click',()=>{
    headerInner.classList.toggle("active");
});





