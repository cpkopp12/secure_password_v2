// Assignment code here

// Funtion for getting length input, returns a number, called in userInput object definition
var getNumChar = function() {
    var lenInput = window.prompt("Enter password length (integer [8-128])");
    while (lenInput < 8 || lenInput > 128) {
      window.alert("You need to enter an integer greater than or equal to 8 and less than or equal to 128! Try again.");
      lenInput = window.prompt("Enter password length (integer [8-128])");
    }
    return Number(lenInput);
 } 

 // Function for getting character choices, returns object of boolean values
 // called in userInput object definition
 var getCharChoices = function() {
    var charInput = {
      lowerCaseChar : window.confirm("Would you like to include lowercase characters? (Must select OK for atleast one of the four character types)"),
      upperCaseChar : window.confirm("Would you like to include uppercase characters? (Must select OK for atleast one of the four character types)"),
      numericChar : window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)"),
      specialChar : window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)")
    }
    while (!charInput.lowerCaseChar && !charInput.upperCaseChar && !charInput.numericChar && !charInput.specialChar) {
      window.alert("You must select OK for atleast one of the character types. Try again!")
      charInput.lowerCaseChar = window.confirm("Would you like to include lowercase characters? (Must select OK for atleast one of the four character types)"),
      charInput.upperCaseChar = window.confirm("Would you like to include uppercase characters? (Must select OK for atleast one of the four character types)"),
      charInput.numericChar = window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)"),
      charInput.specialChar = window.confirm("Would you like to include special characters? (Must select OK for atleast one of the four character types)")
    }
    return charInput;
 }

 var randInt = function(mn,mx) {
  var value = Math.floor(Math.random() * (mx-mn+1)) + mn;

  return value;
};


function generatePassword() {
  //Define arrays of characters
  const lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specChars = ['!', '@', '#', '$', '%', '^', '&', '*'];
  
  
  //Get User Input
  var userInput = {
    //numChar is just one number
    numChar : getNumChar(),
    //charChoices is an object containing a boolean variable
    //for each character type
    charChoices : getCharChoices()
  }

  //Set up array to choose randomly from
  var userChars = [];
  
  if (userInput.charChoices.lowerCaseChar) {
    userChars = userChars.concat(lowerCases);
  }
  if (userInput.charChoices.upperCaseChar) {
    userChars = userChars.concat(upperCases);
  }
  if (userInput.charChoices.numericChar) {
    userChars = userChars.concat(numChars);
  }
  if (userInput.charChoices.specialChar) {
    userChars = userChars.concat(specChars);
  }


  //for loop to create randomly selected password elements
  var passwordArray = [];
  for (let i = 0; i < userInput.numChar; i++) {
    var randIndex = randInt(0,userChars.length - 1);
    passwordArray.push(userChars[randIndex]);
  }
  var password = passwordArray.join("");

  return password;
  
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
