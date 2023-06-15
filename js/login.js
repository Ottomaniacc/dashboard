let email = "myemail@gmail.com"; //slaat op in email
let password = "myoriginalpassword";
let account = true; //zet account op true
let inputEmail = document.querySelector(".emaifield"); 
let inputPassword = document.querySelector(".password");
let confirmButton = document.querySelector(".signin").addEventListener("click", inputCheck); //haalt element op uit html en geeft een eventlistener mee

function makeAccount(){ //functie
    localStorage.setItem(email, password); //slaat email  en password op in local storage
}

makeAccount();

function inputCheck(){
    console.log(inputPassword.value); //logt wat er in het inputveld staat
    console.log(inputEmail.value);

    if(inputEmail.value == localStorage.key(0) && inputPassword.value == localStorage.getItem(localStorage.key(0))){ //kijkt of input gelijk is aan wat er in local storage staat
        window.location.replace("/dashboard/home.html"); //gaat naar home.html indien het klopt
    } else {
        console.log("false");
        inputEmail.value = ""; //zet inputfield leeg
        inputPassword.value = "";
    }

}