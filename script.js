const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const phone= document.querySelector("#phone");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");

const fNameError= document.querySelector("#fNameError");
const lNameError= document.querySelector("#lNameError");
const emailError= document.querySelector("#emailError");
const phoneError= document.querySelector("#phoneError");
const passwordError = document.querySelector("#passwordError");
const cPasswordError= document.querySelector("#cPasswordError");

fname.addEventListener("input", ()=>{
    if(fname.value === ""){
        fNameError.textContent = "Please type in your first name";
    } else {
        fNameError.textContent = "";
    }
});

lname.addEventListener("input", ()=>{
    if(lname.value === ""){
        lNameError.textContent = "Please type in your last name";
    } else{
        lNameError.textContent = "";
    }
});

email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        emailError.textContent = "Please enter a valid email ( peterSmith@gmail.com )";
    } else{
        emailError.textContent = "";
    }
});

phone.addEventListener("input", ()=>{
    if(phone.validity.patternMismatch){
        phoneError.textContent = "Please enter a 10 digit phone number";
    } else {
        phoneError.textContent = "";
    }
});

password.addEventListener("input", ()=>{
    if(password.validity.patternMismatch){
        passwordError.textContent = "Please make sure your password contain at least one character, one number and one special character";
    } else{
        passwordError.textContent = "";
    }
});

cPassword.addEventListener("input", ()=>{
    if(password.value != cPassword.value){
        cPasswordError.textContent = "Passwords do not match";
    } else {
        cPasswordError.textContent = "";
    }
})


