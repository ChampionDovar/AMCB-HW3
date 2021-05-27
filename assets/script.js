// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character strings and arrays
var lowCase = 'abcdefghijklmnopqrstuvwxyz'
var upCase = lowCase.toUpperCase()
var num = '0123456789'
var spec = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'

//Generate password
function generatePassword () {
  var list = ""
  var password = ""
  var length = document.getElementById("length").value;

  // Check if a valid length was input
  if (!(length >= 8 && length <= 128)) {
    alert("Password must be 8 to 128 characters")
    return
  }

  //Check which options are selected
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
// Checks if any options are selected
if (list.length == 0){
  alert("You must select at least one option")
  return
}

//Convert character list to array
var set = list.split("")
  //chooses random characters for the password
  for (var i = 0; i < length; i++) {
    var grab = set[Math.floor(Math.random() * set.length)]
    password += grab
    }
    // Write password to the #password input
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
