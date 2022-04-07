// Assignment Code
var generateBtn = document.querySelector("#generate");

function lowerCaseLetters() {
  
  var listOfCharacters = ['a','b','c','d','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}

function upperCaseLetters() {
  
  var listOfCharacters = ['A','B','C','D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}

function numbers() {
  
  var listOfCharacters = ['1','2','3','4','5', '6', '7', '8', '9', '0'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}

function specialSymbols() {
  
  var listOfCharacters = ['!','@','#','$','%', '^', '&', '*', '(', ')','`','~','-','_','=','+','[','{',']','}',';',':','\'','"','\\','|',',','<','.','>','/','?'];
  var randomIndex;

  randomIndex = Math.round(Math.random()*4)

  return listOfCharacters[randomIndex];
}


function generatePassword() {

  var lengthOfPassword = prompt("Enter length of password");

  
      if(!(lengthOfPassword >= 8 && lengthOfPassword <= 128))
      {
        alert("Please enter a valid number - greater than 8 and below 128")
        return "";
      }
      else
      {
        var isLowerCaseRequired = confirm("Do you want to include lowercase letters?");

        var isUpperCaseRequired = confirm("Do you want to include uppercase letters?")
        
        var isNumberRequired = confirm("Do you want to include numbers?")
  
        var isSpecialCharacterRequired = confirm("Do you want to include special characters?")
        //console.log(isLowerCaseRequired)
  
        var tempCharacter = "";
        var result = "";
  
        var option;
        if(isLowerCaseRequired == false && isUpperCaseRequired == false && isNumberRequired == false && isSpecialCharacterRequired == false) {
          alert("Please select one of the character options for the password.")
        }
        else
        {
          

            do {    
          
              option = Math.round(Math.random()*3)
          
              if(option == 0 && isLowerCaseRequired) {
              tempCharacter = lowerCaseLetters();
              } 
          
          
              if(option == 1 && isUpperCaseRequired) {
              tempCharacter = upperCaseLetters();    
              }
              if(option == 2 && isNumberRequired) {
                tempCharacter = numbers();    
              }    
              if(option == 3 && isSpecialCharacterRequired) {
                tempCharacter = specialSymbols();    
              }
          
          
              result = result + tempCharacter;
          
            } while(result.length < lengthOfPassword)
            
          
          
        }
    
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
