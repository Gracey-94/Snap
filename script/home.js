let selected=document.querySelector(".selected");
let optionsContainer= document.querySelector(".options-container");

const option = document.querySelectorAll(".options");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

