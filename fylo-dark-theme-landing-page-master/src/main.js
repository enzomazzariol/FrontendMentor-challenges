const error = document.getElementById("error-message");
const emailInput = document.getElementById("email-input");
const button = document.getElementById("button-email");

button.addEventListener("click", () => {
    if( emailInput.value === "" || !emailInput.value.includes("@") ) {
        error.classList.remove("hidden");
    } else {
        error.classList.add("hidden");
    }
})
