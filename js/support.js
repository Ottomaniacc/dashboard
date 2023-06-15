let textField = document.querySelector(".textfield"); //haalt element op uit html
let buttonOne = document.querySelector(".btnone").addEventListener("click", btnOne); //geeft evenlistener mee
let buttonTwo = document.querySelector(".btntwo").addEventListener("click", btnTwo);
let buttonThree = document.querySelector(".btnthree").addEventListener("click", btnThree);
let buttonOptions = document.querySelector('.btnoptions');
let vid = document.querySelector(".vid");
vid.style.visibility = "hidden";


let buttonFour; //geeft nog geen waarde aan
let buttonFive;
let buttonSix;

textField.textContent = "Bot: // Hey, how could i be off service today?"; //zet text in textfield

function btnOne(){
    buttonOptions.textContent = ""; //maakt buttonoptions leeg
    textField.innerHTML += " <br><br>You: // Help me with my account";
    textField.innerHTML += "<br><br>Bot: // Sure, what seems to be the problem?";

    buttonOptions.innerHTML += `<a class="btn btn-primary btnfour" role="button">Help me with deleting my account</a>
    <a class="btn btn-primary btnfive" role="button">How do i change my profile</a>`;

    buttonFour = document.querySelector(".btnfour").addEventListener("click", btnFour); //declareert 
    buttonFive = document.querySelector(".btnfive").addEventListener("click", btnFive);
}

function btnTwo(){
    textField.innerHTML += "<br><br>You: // How to navigate";
    textField.innerHTML += "<br><br>Bot: // press the 3 stripes on the top left, after that everything shall be self explanitory.";

buttonOptions.innerHTML = `<a class="btn btn-primary btnsix" role="button">I have another question</a>`
    buttonSix = document.querySelector(".btnsix").addEventListener("click", resetFunc);
}

function btnThree(){
    textField.innerHTML += `<br><br> You: // How do i make meth`
    textField.innerHTML += `<br><br> Bot: // Instructional video: >>`
    textField.innerHTML += `<br><br><video autoplay class="vid" src="/media/floyd.mp4"></video>`
    vid.play();

    buttonOptions.innerHTML = `<a class="btn btn-primary btnsix" role="button">I have another question</a>`
    buttonSix = document.querySelector(".btnsix").addEventListener("click", resetFunc);
}

function btnFour(){
    textField.innerHTML += "<br><br>You: // Help me with deleting my account";
    textField.innerHTML += "<br><br>Bot: // Sure, go to profile > hit delete account!";

    buttonOptions.innerHTML = `<a class="btn btn-primary btnsix" role="button">I have another question</a>`
    buttonSix = document.querySelector(".btnsix").addEventListener("click", resetFunc);
}

function btnFive(){
    textField.innerHTML += "<br><br>You: // How do i change my profile";
    textField.innerHTML += "<br><br>Bot: // You can't change your profile, everything goes automated";

    buttonOptions.innerHTML = `<a class="btn btn-primary btnsix" role="button">I have another question</a>`
    buttonSix = document.querySelector(".btnsix").addEventListener("click", resetFunc);
}

function resetFunc(){
    location.reload(); //herlaad de pagina
}