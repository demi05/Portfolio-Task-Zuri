
const hamBurger = document.querySelector(".fa-bars");
const listTwo = document.querySelector(".list-two");

hamBurger.addEventListener("click",()=>{
    listTwo.classList.toggle("active");
})
