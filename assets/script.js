var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", "-", "/", ";", "?", "]", "|", "`"];
var char = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    
    passwordText.value = password; 
  }

// Add event listener to generate button
generateBtn.addEventListener("click", resetStart);

function resetStart() {
  char = []
  writePassword();
}

// Password Parameters set here
function generatePassword() {
    var passLength = parseInt(prompt("How long would you like your password to be? Must be at least 8 characters and no more than 128."));
    if (passLength < 8 || passLength > 128) { 
        alert("Password length must be at least 8 characters and no more than 128 characters! Please enter a valid NUMBER.");
        return generatePassword();
    }

    if (isNaN(passLength)) {
        alert("You must enter a NUMBER!\n(8-128)\nClick 'Generate Password' button to try again.")
        return null;
    }

    var passUpper = confirm("Would you like uppercase letters?");
    var passLower = confirm("Would you like lowercase letters?");
    var passNumber = confirm("Would you like numbers?");
    var passSymbol = confirm("Would you like symbols?");
    var userChoices = [];
 
    
// No choices made will not return a password
    if (!passUpper && !passLower && !passNumber && !passSymbol) {
      alert("You must make at least one character type selection! Click 'Generate Password' button to try again.")
      return null;
    }

    if (passUpper) {
        userChoices = userChoices.concat(upperCase);
    }

    if (passLower) {
        userChoices = userChoices.concat(lowerCase);
    }

    if (passNumber) {
        userChoices = userChoices.concat(numbers);
    }

    if (passSymbol) {
        userChoices = userChoices.concat(symbols);
    }

    for (var i = 0; i < passLength; i++) {
        var randomNum = Math.floor(Math.random() * userChoices.length);
        var character = userChoices[randomNum];
        console.log(character);
        char.push(character);
    }

    return char.join("");
}