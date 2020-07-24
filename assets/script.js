// Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting up variables
var lettersLowercase = "abcdefghijklmnopqrstuvwxyz" .split("");
var lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var numbers = "1234567890" .split("");
var specialCharacters = "!@#$%&*?~|[]-_+=" .split("")

// Prompts for user to answer
var howManyCharacters = prompt("How many characters would you like your password to have? Please choose an amount between 8-128.");
var userLowercase = prompt("Press OK if you would like your password to contain lowercase letters.");
var userUppercase = prompt("Press OK if you would like your password to contain uppercase letters.");
var userNumbers = prompt("Press OK if you would like your password to contain numbers.");
var userSpecial = prompt("Press OK if you would like your password to contain special characters.");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

