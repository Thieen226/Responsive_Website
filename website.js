const submitButton = document.getElementById("submit");

function submitSucess(){
    window.location.reload();
}
submitButton.addEventListener("click", submitSucess);