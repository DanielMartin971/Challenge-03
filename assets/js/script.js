// Assignment Code
var generateBtn = document.querySelector("#generate");

var criteria = {
  length: 0,
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword(){
    var allTog     = ''
    var ranSpec    = '!#$%^&*';
    var numbers    = '0123456789'
    var random     = Math.floor(Math.random() * allTog.length);
    var letters    = 'abcdefghijklmnopqrstuvwxyz';
    var randomPass = '';

      criteria.length = JSON.parse(document.getElementById('length').value);

    if(document.getElementById('special').checked){
      allTog += ranSpec;
    }

    if(document.getElementById('lower').checked){
      allTog += letters;
    }

    if(document.getElementById('upper').checked){
      allTog += letters.toUpperCase();
    }

    if(document.getElementById('numeric').checked){
      allTog += numbers;
    }

    random = Math.floor(Math.random() * allTog.length);
    console.log(allTog);


    for(let i = 0; i < criteria.length; i++){
      randomPass += allTog.charAt(random)

      random = Math.floor(Math.random() * allTog.length);
    }

    return randomPass; 

  }

  console.log('Getting password');

  passwordText.value = password;
  console.log(password.length);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
