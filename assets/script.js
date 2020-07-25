// Assignment Code (provided)
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialCharacters = "!#$%&*+<=>?@/[]^_`|~".split("");

//Function to generate the password
function generatePassword() {
  var myArray = [];
  var finalPassword = [];
  var charCount = prompt("How many characters would you like your password to be?");

  //Converting charCount from a string to an integer
  var charCount = parseInt(charCount);
  if (charCount < 8 || charCount > 128) {
    alert("Please create a password between 8 and 128 characters long.");
    return location.reload();
  }
  //Asking users to verify what type of characters they want in their password. If they press ok, the those character types will be pushed into the myArray to later be randomized. 
  var userUpper = confirm(
    "Do you want your password to contain uppercase letters? If yes, press OK."
  );
  if (userUpper === true) {
    for (var i = 0; i < uppercaseLetters.length; i++) {
      myArray.push(uppercaseLetters[i]);
      console.log("User wants uppercase letters in their password.");
    }
  }
  var userLower = confirm(
    "Do you want your password to contain lowercase letters? If yes, press OK."
  );
  if (userLower === true) {
    for (var i = 0; i < lowercaseLetters.length; i++) {
      myArray.push(lowercaseLetters[i]);
      console.log("User wants lowercase letters in their password.");
    }
  }
  var userNumbers = confirm(
    "Do you want your password to contain numbers? If yes, press OK."
  );
  if (userNumbers === true) {
    for (var i = 0; i < numbers.length; i++) {
      myArray.push(numbers[i]);
      console.log("User wants numbers in their password.");
    }
  }
  var userSpecialChar = confirm(
    "Do you want your password to contain special characters? If yes, press OK."
  );
  if (userSpecialChar === true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      myArray.push(specialCharacters[i]);
      console.log("User wants special characters in their password.");
    }
  }

  //If the user presses cancel on all 4 character types, they will receive an error. One character type is mandatory.
  if (userUpper === false && userLower === false && userNumbers === false && userSpecialChar === false) {
    alert(
      "Please select at least one character type. Password must contain at least one character type."
    );
    return location.reload();
  }

  //Process all of the characters stored in myArray (any character type that the user said they wanted in their password), then randomly choose characters to compose a password (with the length determined by the user in the initial prompt)
  for (var i = 0; i < charCount; i++) {
    var randomNum = Math.floor(Math.random() * myArray.length);
    console.log(randomNum);
    finalPassword.push(myArray[randomNum]);
  }
  return finalPassword.join("");
}
// Write password to the #password input (provided)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button (provided)
generateBtn.addEventListener("click", writePassword);
