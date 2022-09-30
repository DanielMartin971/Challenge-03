// Assignment Code
var generateBtn = document.querySelector("#generate");

var criteria = {
  length: 0,
  lower: false,
  upper: false,
  numeric: false,
  special: false
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword(){
    var random = Math.floor(Math.random() * 7);
    var randomPass = '';

    criteria.length = JSON.parse(document.getElementById('length').value);

    if(document.getElementById('special').checked){
      criteria.special = true;
      console.log('The specials are true');
    }

    if(document.getElementById('lower').checked){
      criteria.lower = true;
      console.log('The lowers are true')
    }


    if(document.getElementById('upper').checked){
      criteria.upper = true;
      console.log('The uppers are true')
    }


    if(document.getElementById('numeric').checked){
      criteria.numeric = true;
      console.log('The numerics are true')
    }


    for(var i = 0; i <= criteria.length; i++){
      if(criteria.special == true){
        if(random == 0){
          randomPass += '!';
        }
        else if(random == 1){
          randomPass += '#';
        }
        else if(random == 2){
          randomPass += '$';
        }
        else if(random == 3){
          randomPass += '%';
        }
        else if(random == 4){
          randomPass += '^';
        }
        else if(random == 5){
          randomPass += '&';
        }
        else if(random == 6){
          randomPass += '*';
        }

        random = Math.floor(Math.random() * 7);
      }
      else if(criteria.lower == true){

      }
      else if(criteria.upper == true){

      }
      else if(criteria.numeric == true){

      }

    }

    if(criteria.lower == false
      && criteria.upper == false
      && criteria.numeric == false
      && criteria.special == false
      || criteria.length <= 0){
        generateBtn.textContent = "Choose a length and select atleast 1 criteria"
    }
    else{
      return randomPass; 
    }

  }

  console.log('Getting password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
