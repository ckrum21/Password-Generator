//Assignment Code
var generateBtn = document.querySelector("#generate");




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
//3. generate password based on criteria
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
