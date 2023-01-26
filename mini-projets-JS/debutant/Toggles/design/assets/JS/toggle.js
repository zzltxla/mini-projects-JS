let btn = document.querySelectorAll("button");
let backbtn = document.querySelectorAll(".switch");
//VAR REGION ENDS HERE 

btn.forEach(element => element.addEventListener("click", function() {
    this.classList.toggle(".LeftToRight");
    this.parentElement.classList.toggle(".changeColor");
}))
