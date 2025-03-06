
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const errorMessage = document.getElementById("error-message");

  if (email && password) {
      errorMessage.textContent = "Welldone!"; 
      errorMessage.style.color = "white";
  } else {
      errorMessage.textContent = "Please fill in all fields.!";
      errorMessage.style.color = "white"; 
  }
});