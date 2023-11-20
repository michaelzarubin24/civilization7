// import "../main";

// -----------------------------------VALIDATION-------------------------------------------

// const signButton = document.getElementById("sign-in");
// const inputField = document.getElementById("email");
// const passwordField = document.getElementById("password");

// signButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   const inputValue = inputField.value.trim();
//   const passwordValue = passwordField.value.trim();

//   if (
//     inputValue.length > 6 &&
//     passwordValue.length > 6 &&
//     hasNumbersAndLetters(inputValue) &&
//     hasNumbersAndLetters(passwordValue)
//   ) {
//     inputField.style.backgroundColor = "lightblue";
//     passwordField.style.backgroundColor = "lightblue";
//     alert("Validation successful! Congratulations!");
//     window.location.href = "./pages/newgame/newgame.html";
//   } else {
//     if (inputValue.length <= 6 || !hasNumbersAndLetters(inputValue)) {
//       inputField.style.backgroundColor = "red";
//       alert(
//         "Email validation failed: Email must have more than 6 characters and contain both letters and numbers."
//       );
//       inputField.focus();
//     }
//     if (passwordValue.length <= 6 || !hasNumbersAndLetters(passwordValue)) {
//       passwordField.style.backgroundColor = "red";
//       alert(
//         "Password validation failed: Password must have more than 6 characters and contain both letters and numbers."
//       );
//       passwordField.focus();
//     }
//   }
// });
