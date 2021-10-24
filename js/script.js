let regex = /[A-zÀ-ú\'\ ]{2,30}/;
let firstname = document.querySelector(".firstname");

firstname.addEventListener("keyup", function() {
    if ((!regex.test(firstname.value))||firstname.value.length>30) {
        firstname.style.backgroundColor = "rgba(255,0,0,0.4)";
        return false;
    }else {
        firstname.style.background= "";}
})


let surname = document.querySelector(".name");

surname.addEventListener("keyup", function() {
    if ((!regex.test(surname.value))||surname.value.length>30) {
        surname.style.backgroundColor = "rgba(255,0,0,0.4)";
        return false;
    }else {
        surname.style.background= "";}
})

let regex2 = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}/;
let email = document.querySelector(".email");

email.addEventListener("keyup", function() {
    if ((!regex2.test(email.value))||email.value.length>40) {
        email.style.backgroundColor = "rgba(255,0,0,0.4)";
        return false;
    }else {
        email.style.background= "";}
})

var regex3 = /[0-9]{3,20}/;
var phone = document.querySelector(".phone");

phone.addEventListener("keyup", function () {
    if ((!regex3.test(phone.value)) ||phone.value.length > 20) {
        phone.style.backgroundColor = "rgba(255,0,0,0.4)";
        return false;
    } else {
        phone.style.background = "";
    }
});


function controlform(){
    if (true) {
        console.log("Votre formulaire vient d'être validé");
    } else{
        console.log("Votre formulaire n'est pas encore validé");
    }
}