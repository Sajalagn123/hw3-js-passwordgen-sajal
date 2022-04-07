// Assignment Code
var generateBtn = document.querySelector("#generate");

function lowerCaseLetters() {
  
  var listOfCharacters = ['a','b','c','d','e'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}

function upperCaseLetters() {
  
  var listOfCharacters = ['A','B','C','D','E'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}

function numbers() {
  
  var listOfCharacters = ['1','2','3','4','5'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}

function specialSymbols() {
  
  var listOfCharacters = ['!','@','#','$','%'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}


function generatePassword() {

  var lengthOfPassword = prompt("Enter length of password");

  //var isLowerCaseRequired = confirm("Do you want to include lowercase letters");

  //console.log(isLowerCaseRequired)

  var tempCharacter;
  var result = "";

  var option;

  

  for(var i=0; i < lengthOfPassword ; i++) {    
   
    option = Math.round(Math.random()*3)

    if(option == 0) {
    tempCharacter = lowerCaseLetters();
    }
    if(option == 1) {
    tempCharacter = upperCaseLetters();    
    }
    if(option == 2) {
      tempCharacter = numbers();    
    }    
    if(option == 3) {
      tempCharacter = specialSymbols();    
    }


    result = result + tempCharacter;

  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
