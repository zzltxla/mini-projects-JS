let nameContainer = document.querySelector("#name");
let mailContainer = document.querySelector("#email");
let passwordContainer = document.querySelector("#password");
let confirmContainer = document.querySelector("#confirm");
//all the containers

let usr = document.querySelector("#name-ipt");
let email = document.querySelector("#email-ipt");
let password = document.querySelector("#password-ipt");
let confirmation = document.querySelector("#confirm-ipt");
//input's value

let btn = document.querySelector("button");

//VAR REGION ENDS HERE 


function errTxt(ipt) {  //creates the error text
    // let errorTxt = document.createTextNode("Field is requiered !");
    let newEl = document.createElement("p");
    newEl.innerText = "Field is requiered !"
    // newEl.appendChild(errorTxt);
    newEl.style.color = "red";
    // newEl.after(ipt);
    ipt.append(newEl)
};



btn.addEventListener('click', function () {     //event listener 
    if ((usr.value).match(/[1-9]$/d) || (usr.value) === '') {   //name section
        console.log("error in name field");
        errTxt(nameContainer);
    }
    if ((email.value).match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/gm) == false || email.value === '') {    //email section
        console.log("error in email field !");
        errTxt(mailContainer);
    }
    if ((password.value).match(/(?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&\/\(\)\?\^\'\\\+\-\*]))^.*/gm) == false || (password.value) === '') {  //password section 
        console.log("error in password field !");
        errTxt(passwordContainer);
    }
    if ((confirmation.value) !== password.value || (confirmation.value) === '') {    //confirm section 
        console.log("error in confirm field !");
        errTxt(confirmContainer);
    }
});
