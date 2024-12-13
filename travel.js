let searchbtn = document.querySelector("#serach-btn");
let searchform = document.querySelector(".serach-form");
let logininform = document.querySelector(".login-form");
let menubar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");
let vidbtn = document.querySelectorAll(".video-btn");

function showbar() {
    searchbtn.classList.toggle("fa-times");
    searchform.classList.toggle("active");
}
function showform() {
    logininform.classList.add("active");
}
function hideform() {
    logininform.classList.remove("active");
}
function showmenu() {
    menubar.classList.toggle("fa-times");
    amenu.classList.toggle("active");
}
vidbtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector(".controls .blue").classList.remove("blue")
        slide.classList.add("blue")
        let src = slide.getAttribute("data-src")
        document.querySelector("#video-slider").src = src

    })


})
var swiper = new Swiper(".review-slider", {
    sapceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3 
        }


    }



});