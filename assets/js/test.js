const navItems = document.querySelectorAll('.main-menu-item');

navItems.forEach(item => {
    item.addEventListener('click', function () {
        navItems.forEach(i => i.classList.remove('active'));

        this.classList.add('active');
    });
});


let mobileView = document.querySelector(".mobileView");
let menuBtn = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelectorAll(".nav_links");
let arrow1 = document.querySelector(".arrow_1");
let arrow2 = document.querySelector(".arrow_2");
let arrow3 = document.querySelector(".arrow_3");

menuBtn.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    arrow1.classList.toggle("rotate1");
    arrow2.classList.toggle("rotate2");
    arrow3.classList.toggle("rotate3");
})

navlinks.forEach(link => {
    link.addEventListener("click", function () {
        mobileView.classList.toggle("show");
        body.classList.remove("overflow-hidden");
        arrow1.classList.toggle("rotate1");
        arrow2.classList.toggle("rotate2");
        arrow3.classList.toggle("rotate3");
    })
});


document.body.style.overflow = 'hidden';


setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.style.overflow = 'auto'; 

    AOS.init({
        once: true,
        duration: 2500,
        disable: 'mobile',
    });
}, 4000); 
