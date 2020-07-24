// Assignment Code (provided)
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialCharacters = "!#$%&*+<=>?@/[]^_`|~".split("");

// Created variables/prompts to figure out what criteria user wants in their password:
var charCount = prompt(
  "How many characters would you like your password to be?"
);
var userUppercase = confirm(
  "Do you want your password to contain uppercase letters? If yes, press OK."
);
var userLowercase = confirm(
  "Do you want your password to contain lowercase letters? If yes, press OK."
);
var userNumbers = confirm(
  "Do you want your password to contain numbers? If yes, press OK."
);
var userSpecialChar = confirm(
  "Do you want your password to contain special characters? If yes, press OK."
);

//Function to generate the password
function generatePassword(howManyChar, upLet, lowLet, numb, char) {
  var myArray = [];
  var finalPassword = [];

  //Converting howManyChar from a string to an integer
  var howManyChar = parseInt(howManyChar);
  if (howManyChar < 8 || howManyChar > 128) {
    alert("Please create a password between 8 and 128 characters long.");
    return location.reload();
  }

  //Records responses of the user. If it's true, it pushes that type of character into the array. If they press cancel, it do not push those characters into the array.
  if (upLet === true) {
    for (var i = 0; i < uppercaseLetters.length; i++) {
      myArray.push(uppercaseLetters[i]);
      console.log("User wants uppercase letters in their password.");
    }
  }
  if (lowLet === true) {
    for (var i = 0; i < lowercaseLetters.length; i++) {
      myArray.push(lowercaseLetters[i]);
      console.log("User wants lowercase letters in their password.");
    }
  }
  if (numb === true) {
    for (var i = 0; i < numbers.length; i++) {
      myArray.push(numbers[i]);
      console.log("User wants numbers in their password.");
    }
  }
  if (char === true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      myArray.push(specialCharacters[i]);
      console.log("User wants special characters in their password.");
    }
  }

  //If the user presses cancel on all 4 character types, they will receive an error. One character type is mandatory.
  if (upLet === false && lowLet === false && numb === false && char === false) {
    alert(
      "Please select at least one character type. Password must contain at least one character type."
    );
    return location.reload();
  }

  //Loop created to process all of the characters stored in myArray (any character type that the user said they wanted in their password), then randomly choose characters to compose a password (with the length determined by the user in the initial prompt)
  for (var i = 0; i < howManyChar; i++) {
    var randomNum = Math.floor(Math.random() * myArray.length);
    console.log(randomNum);
    finalPassword.push(myArray[randomNum]);
  }
  return finalPassword.join("");
}
// Write password to the #password input (provided)
function writePassword() {
  var password = generatePassword(
    charCount,
    userUppercase,
    userLowercase,
    userNumbers,
    userSpecialChar
  );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button (provided)
generateBtn.addEventListener("click", writePassword);
