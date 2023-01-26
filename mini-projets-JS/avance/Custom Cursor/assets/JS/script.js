let myCursor = document.querySelector("div");
// let body = document.querySelector("body");
//var region ends here 

function positionElement (el) {
    let mouseY = el.clientY;
    let mouseX = el.clientX;

    myCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};
document.addEventListener('mousemove', positionElement);


document.addEventListener("click", function () {
    console.log('b');
    let circle = document.createElement("span");
    circle.className = ("round");
    myCursor.appendChild(circle);
});