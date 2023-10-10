// Create variable for password field 1
const password = document.getElementById("password");
// Create veriable/event listener for password field 2
const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", passCheck);

function passCheck() {
  if (confirmPassword.value !== password.value) {
    password.classList.add("passwordError");
    confirmPassword.classList.add("passwordError");
  }
  if (confirmPassword.value == password.value) {
    password.classList.remove("passwordError");
    confirmPassword.classList.remove("passwordError");
  }
}