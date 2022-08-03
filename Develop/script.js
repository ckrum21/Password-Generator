//Assignment Code
var generateBtn = document.querySelector("#generate");

//function generates a random intger between the min and max
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
//math.random picks a random number. Math.floor ensures that the number is a whole number.
var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

// function generates a random number from the charater lists arrays
function randomItem(list) {
  return list[randomInt(list.length)]
}


function generatePassword(){
//1. Prompt user for the password
//prompts user by asking how many charaters
var userInput = prompt("How many characters would you like your password to contain?");
// varibale for password length, parseInt returns first integer
var passwordLength = parseInt(userInput)

//If function finds if the users input is not a number, then it alerts the user
if(isNaN(passwordLength)) {
  window.alert("That's not a number!")
  return
}
    //a. password length 8 < 128 characters
    //if function requiring the user to insert a nuber between 8 and 128.
    if (passwordLength < 8 || passwordLength > 128){
      window.alert("Password length must be between 8 and 128 characters")
      return
    }
  
    //b. Lowercase, uppercase, numbers, and special characters
    //promts user for each question. Confirm displays as a "ok" or "cancel"
    var speCharacter = confirm("Click OK to confirm including spcecial characters.")

    var numCharacter = confirm("Click OK to confirm including numeric characters.")
  
    var lowCase = confirm("Click OK to confirm including lowercase characters.")
  
    var upCase = confirm("Click OK to confirm including uppercase characters.")


    //List of each charater type. User must pick from the characters below
    var speList = ["!", "@", "#", "$", "%", "^", "&", "*"]

    var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
    var uppercaseList = []
  //for loop allows the uppercase list to be the same characters as the lowercase list, but it is capitlized
    for (var i = 0; i < lowercaseList.length; i++){
      uppercaseList[i] = lowercaseList[i].toUpperCase()
    }
  
//2. Validate the input
//variable options allows the user to decide which criteria they want their password to have
var options = []

//The if functions below ask if the charater type is true or not(if selected "ok"). If it is true, then the list will be added to the options array
if (speCharacter === true) {
  options.push(speList)
}

if (numCharacter === true) {
  options.push(numberList)
}

if (lowCase === true) {
  options.push(lowercaseList)
}

if (upCase === true) {
  options.push(uppercaseList)
}

//if no character types are selected, then the numbers list will be default 
if (options.length === 0) {
  options.push(numberList)
}

//3. generate password based on criteria
var generatePassword = ""

//genrate a reandom password based on selected character types
for (var i = 0; i < passwordLength; i++) {
  var randomList = randomItem(options)
  var randomChar = randomItem(randomList)
  generatePassword += randomChar
}

// 4.display password to page



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
