let btn = document.querySelectorAll("button");
let backbtn = document.querySelectorAll(".switch");
//VAR REGION ENDS HERE 

function movingBtn () {
    btn.classList.toggle("LeftToRight");
    backbtn.classList.toggle("changeColor");
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', movingBtn);
}
