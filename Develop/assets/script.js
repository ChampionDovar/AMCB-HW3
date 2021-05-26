// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = document.getElementById('length').value;

//Character strings and arrays
var lowCase = 'abcdefghijklmnopqrstuvwxyz'
var upCase = lowCase.toUpperCase()
var num = '0123456789'
var spec = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'

//Generate password
function generatePassword () {
  var list = ""
  if (length <= 8 || length >= 128) {
    alert("Password must be 8 to 128 characters")
    return
  }


if (document.querySelector('#a:checked') !== null){
  list = list.concat(lowCase)
}
if (document.querySelector('#b:checked') !== null){
  list = list.concat(upCase)
}
if (document.querySelector('#c:checked') !== null){
  list = list.concat(num)
}
if (document.querySelector('#d:checked') !== null){
  list = list.concat(spec)
}
if (list.length == 0){
  alert("You must select at least one option")
  return
}

var set = list.split("")
console.log(length)
  for (var i = 0; i < length; i++) {
    password += getPasswordCharacter();
  }

function getPasswordCharacter(){
  return list[Math.floor(Math.random() * list.length)]
}}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  writePassword.preventdefault

console.log(lowCase)
console.log(upCase)


