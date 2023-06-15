let deleteBtn = document.querySelector(".delete").addEventListener("click", deleteFunc) //geeft eventlistener mee aan het geslecteerde element

function deleteFunc(){
    window.location.replace("/index.html"); //gaat terug naar de login pagina
}