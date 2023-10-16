const submitButton = document.getElementById("submit");

function submitSucess(){
    const changeDisplay= document.getElementById("after_submit");
    changeDisplay.style.alert="none";
    changeDisplay.textContent="Thank you! You have sucessfully submitted a report form, we will contact you soon!";
    changeDisplay.style.margin="5rem";
    changeDisplay.style.color="#4CAF50";
}
submitButton.addEventListener("click", submitSucess);