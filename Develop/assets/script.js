// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character sets
var lowCaseBl = 'abcdefghijklmnopqrstuvwxyz'
var upCaseBl = lowCaseBl.toUpperCase()
var numBl = '0123456789'
var specBl = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'

var lowCase = lowCaseBl.split('')
var upCase = upCaseBl.split('')
var num = numBl.split('')
var spec = specBl.split('')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(lowCase)
console.log(upCase)
console.log(num)
console.log(spec)
console.log(password)
console.log(passwordText)
