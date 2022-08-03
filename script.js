// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword(){


  //1. Promt user for the password criteria
  var userInput = prompt("How many characters would you like your password to contain?");
  var passwordLength = parseInt(userInput)

  if(isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  }
  //  a. password length 8 < 128
  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password length must be between 8 and 128 characters")
    return
  }


 //  b. lowercase, uppercase, numbers, special characters
  var speCharacter = confirm("Click OK to confirm including special characters.")

  var numCharacter = confirm("Click OK to confirm including numeric characters.")

  var lowCase = confirm("Click OK to confirm including lowercase characters.")

  var upCase = confirm("Click OK to confirm including uppercase characters.")
 
  //2. validate the input. 

  var speList = ["!", "@", "#", "$", "%", "^", "&", "*"]

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var uppercaseList = []


  var optionsCart = []


  for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (speCharacter === true) {
    optionsCart.push(speList)
  }

  if (numCharacter === true) {
    optionsCart.push(numberList)
  }

  if (lowCase === true) {
    optionsCart.push(lowercaseList)
  }

  if (upCase === true) {
    optionsCart.push(uppercaseList)
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }
  //3. Generate password based on criteria


  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  //4. Display password to page.
  return generatePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
