let btn = document.querySelectorAll("button");
let backbtn = document.querySelectorAll(".switch");

//VAR REGION ENDS HERE 

function movingBtn() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.toggle (".LeftToRight");
        // console.log(btn.forEach(element => i.indexOf(element)));
        for(let e = 0; e < backbtn.length; e++){
            backbtn[e].classList.toggle(".changeColor");
        }
    }
}

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', movingBtn);
}

