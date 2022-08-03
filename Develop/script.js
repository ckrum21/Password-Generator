//Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){
//1. Prompt user for the password
    //a. password length 8 < 128 characters
    //b. Lowercase, uppercase, numbers, and special characters
//2. Validate the input
//3. generate password based on criteria
// display password to page
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
