const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const emailError = document.getElementById('email-error');
const countryError = document.getElementById('country-error');
const zipError = document.getElementById('zip-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.style.borderColor = "red";
}

function clearError(input, errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.style.borderColor = "green";
}

email.addEventListener('input', () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.value.match(emailRegex)) {
        showError(email, emailError, "Please enter a valid email address.");
    } else {
        clearError(email, emailError);
    }
})


zip.addEventListener('input', () => {
    const zipRegex = /^\d{5}$/;
    if (!zip.value.match(zipRegex)) {
        showError(zip, zipError, "Please enter a valid 5-digit zip code.");
    } else {
        clearError(zip, zipError);
    }
});


password.addEventListener('input', () => {
    if (password.value.length < 8) {
        showError(password, passwordError, "Password must be at least 8 characters long.");
    } else {
        clearError(password, passwordError);
    }
});


confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, confirmPasswordError, "Passwords do not match.");
    } else {
        clearError(confirmPassword, confirmPasswordError);
    }
});
