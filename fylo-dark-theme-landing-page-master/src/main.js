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

function updateImageSource() {
      const image = document.getElementById('bg-image');
      
      // Verificar el tamaño de la pantalla
      if (window.innerWidth <= 740) { // Este es el tamaño sm (pequeño)
        image.src = './images/bg-curvy-mobile.svg'; // Cambiar a imagen de móvil
      } else {
        image.src = './images/bg-curvy-desktop.svg'; // Cambiar a imagen de escritorio
      }
    }

    // Llamar la función al cargar la página
    window.onload = updateImageSource;

    // Llamar la función cada vez que se cambie el tamaño de la ventana
    window.onresize = updateImageSource;