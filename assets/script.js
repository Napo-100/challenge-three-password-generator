// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ";", "@", "?", "]", "|", "`"];



// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function validatePassword(){
// if (passLength < 8 || passLength > 128) {
//   alert("Password must be 8 to 128 characters. Please select a number in that range.") 
// }else {
//   generatePassword()
// }
// }
// if (!passUpper && !passLower && !passNumber && !passSymbol) {
//   alert("You must select at least one character type. Please press the 'Generate Password' button to start again.")
// }else {
//   generatePassword()
// }

// function generatePassword() {
//     var passLength = prompt("Please choose a length for your password that is at least 8 charactes long and no more than 128.");
//     var passUpper = confirm("Would you Like uppercase letters?");
//     var passLower = confirm("Would you Like lowercase letters?");
//     var passNumber = confirm("Would you Like numbers?");
//     var passSymbol = confirm("Would you like special characters?");
//     var userChoices = [];
//     var character = [];
  

//     if (passUpper) {
//         userChoices = userChoices.concat(upperCase);
//     }

//     if (passLower) {
//         userChoices = userChoices.concat(lowerCase);
//     }

//     if (passNumber) {
//         userChoices = userChoices.concat(number);
//     }

//     if (passSymbol) {
//         userChoices = userChoices.concat(symbols);
//     }
//       console.log(userChoices);

//     for (var i = 0; i < passLength; i++) {
//         character.push (userChoices[Math.floor(Math.random() * userChoices.length)]); 
        
//   }

//   return character.join("") ;

//     }
    


  // *************************************************************************************************************************************






//   // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

//  function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }


// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = '!@#$%^&*(){}[]=<>/,.';
//   return symbols [Math.floor(Math.random() * symbols.length)];
// }

// generateBtn.addEventListener("click", writePassword);

// function generatePassword() {
//   var length = prompt("How long would you like your password to be? Please enter number between 8 and 128.")
//   var upper = confirm("Would you like uppercase letters in your password?")
//   var lower = confirm("Would you like lowercase letters in your password?")
//   var number = confirm("Would you like numbers in your password?")
//   var symbol = confirm("Would you like symbols in your password?")
//   var userChoices = [];
//   var character = [];
  

//   if (upper) {
//     userChoices = userChoices.concat(getRandomUpper());
//     console.log(getRandomUpper());
    
//   }

//   if (lower) {
//     userChoices =userChoices.concat(getRandomLower());
//     console.log(getRandomLower());
    
//   }

//   if (number) {
//     userChoices =userChoices.concat(getRandomNumber());
//     console.log(getRandomNumber());
//   }

//   if (symbol) {
//     userChoices = userChoices.concat(getRandomSymbol());
//     console.log(getRandomSymbol());
    
//   }

//   for (var i = 0; i < length; i++) {
//         character.push (userChoices[Math.floor(Math.random() * userChoices.length)]); 
//       }
//        return character.join("") ;

//   }
  
// *****************************************************************************************************************************************

// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ";", "@", "?", "]", "|", "`"];


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);

// // Write password to the #password input
// function writePassword(newPassword) {
//     var passwordText = document.querySelector("#password");
//     passwordText.value = newPassword;
// }



// function validatePasswordLength(passLength){
// 	if (passLength < 8 || passLength > 128) {
//   	return false
// 	}
  
//   return true
// }

// function validatePasswordCharacters(uppercase, lowercase, number, symbol){
// 	if (!passUpper && !passLower && !passNumber && !passSymbol) {
//   	return false
// 	}
  
//   return true
// }

// function generatePassword() {
//   var passLength = prompt("Please choose a length for your password that is at least 8 charactes long and no more than 128.");

// 	if (validatePasswordLength(passLength)) {
// 			var passUpper = confirm("Would you Like uppercase letters?");
//     	var passLower = confirm("Would you Like lowercase letters?");
//     	var passNumber = confirm("Would you Like numbers?");
//     	var passSymbol = confirm("Would you like special characters?");
    
//   		if (validatePasswordCharacters(passUpper, passLower, passNumber, passSymbol)) {
    	
//       	// Generate the password and display it on the page
      
//       	var userChoices = [];
//     		var character = [];
  
//       	userChoices = userChoices.concat(upperCase);
//       	userChoices = userChoices.concat(lowerCase);
//     		userChoices = userChoices.concat(number);
//     		userChoices = userChoices.concat(symbols);
  
//     		for (var i = 0; i < passLength; i++) {
//         		character.push(userChoices[Math.floor(Math.random() * userChoices.length)]); 
//     		}
    
//     		writePassword(character.join(""));
      	
//   		} else {
//     		alert("You must select at least one character type. Please press the 'Generate Password' button to start again.")
//   		}
  
//   } else {
// 		alert("Password must be 8 to 128 characters. Please select a number in that range.") 
//   }
// }

// **********************************************************************************************************

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", "/", ";", "@", "?", "]", "|", "`"];
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
function generatePassword() {
    var passLength = parseInt(prompt("Please choose a length of your password that is at least 8 character long and no more than 128."));
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Password length must be at least 8 characters and no more than 128 characters!");
        return;
    }

    var passUpper = confirm("Would you Like uppercase letters?");
    var passLower = confirm("Would you Like lowercase letters?");
    var passNumber = confirm("Would you Like numbers?");
    var passSymbol = confirm("Would you like symbols?");
    var userChoices = [];
    
    if (!passUpper && !passLower && !passNumber && !passSymbol) {
      alert("You must make at least one character type selection! click 'Generate Password' button to try again.")
      return;
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