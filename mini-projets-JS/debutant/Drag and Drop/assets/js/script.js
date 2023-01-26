let div = document.querySelector("div");
//var region ends here 

div.onmousedown = function(event) {

    div.style.position = "absolute";    //absolute to allow repositioning 
    div.style.zIndex = 1000;

    document.body.append(div);
    
    function moveAt(pageX, pageY) {     //repositioning the mouse in the card 
        div.style.left = pageX - div.offsetWidth / 2 + "px";
        div.style.top = pageY - div.offsetHeight / 2 + "px";
    };

    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {   //to move the card
        moveAt(event.pageX, event.pageY);
    };
    
    document.addEventListener('mousemove', onMouseMove);

    div.onmouseup = function () {   //remove the event and stops the card from moving when mouseup
        document.removeEventListener('mousemove', onMouseMove);
        div.onmouseup = null;
    };
};


// let movement = (el) => {

//     let mouseY = el.clientY;
//     let mouseX = el.clientX;


//     div.style.left = mouseX - div.offsetWidth / 2 + "p";
//     div.style.top = mouseY - div.offsetHeight / 2 + "px";
// };

