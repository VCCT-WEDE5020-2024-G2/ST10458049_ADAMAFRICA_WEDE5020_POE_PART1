let openBtn = document.querySelector(".openNav");
let header = document.querySelector(".header");
let display = document.querySelector(".navDisplay");
let closeBtn = document.querySelector(".closeNav");

function openNav() {
    header.classList.toggle("active");
    display.classList.toggle("active");
}

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", openNav);
