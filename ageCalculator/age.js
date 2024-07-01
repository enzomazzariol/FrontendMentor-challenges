document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    // Limpiar errores previos
    let errorFields = document.querySelectorAll('.error');
    errorFields.forEach(function(field) {
        field.classList.remove('error');
        field.style.border = ''; 
    });

    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
        message.textContent = '';
    });

    // Obtener valores de los inputs
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    let hasError = false;

    // Función para mostrar errores
    function showError(elementId, message) {
        var element = document.getElementById(elementId);
        element.classList.add('error');
        element.style.border = '1px solid red';
        var errorMessageElement = document.getElementById(elementId + '-error');
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = 'red'; 
        hasError = true;
    }

    // Validación de campos
    if (!day) {
        showError('day', 'This field is required');
    } else if (day < 1 || day > 31) {
        showError('day', 'Must be a valid day');
    }

    if (!month) {
        showError('month', 'This field is required');
    } else if (month < 1 || month > 12) {
        showError('month', 'Must be a valid month');
    }

    if (!year) {
        showError('year', 'This field is required');
    } else if (year > new Date().getFullYear()) {
        showError('year', 'Must be a valid year');
    }

    if (hasError) {
        return;
    }

    // Calcular edad
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Mostrar resultado
    document.getElementById("result-year").textContent = ageYears;
    document.getElementById("result-month").textContent = ageMonths;
    document.getElementById("result-day").textContent = ageDays;
});
