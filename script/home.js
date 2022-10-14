let menu=document.querySelector(".menu");
let mobileNav= document.querySelector(".mobile-nav");
let closeIcon=document.querySelector(".close-icon");

const listItem = document.querySelectorAll(".dropdown-list_item");

menu.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

