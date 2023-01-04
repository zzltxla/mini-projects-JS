let btn = document.querySelectorAll("button");
let backbtn = document.querySelectorAll(".switch");
console.log(btn[0])
//VAR REGION ENDS HERE 

// function movingBtn() {
//     for (let i = 0; i < btn.length; i++) {
    
//         btn[i].classList.toggle(".LeftToRight");
//         console.log(i);
//         // console.log(btn.forEach(element => i.indexOf(element)));
//         for(let e = 0; e < backbtn.length; e++){
//             backbtn[e].classList.toggle(".changeColor");
//         }
//     }
// }

// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('click', movingBtn);
// }

btn.forEach(element => element.addEventListener("click", function() {
    this.classList.toggle(".LeftToRight");
    this.parentElement.classList.toggle(".changeColor");
}))
