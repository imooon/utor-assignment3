// Assignment code here
var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specChar = ['?', ':', '%', ')', '^', '+', '#', '[', '}', '@', '\\', ',', '/', '~', '(', '-', ']', '_', '!', '.', '$', '{', '\''];

// Get references to the #generate element

function passwordRequirements() {

  var length = parseInt(prompt("How many characters do you want your password to have?"), 10);

  if (Number.isNaN(length)) {
    alert('Password length must be typed in digits!');
    return null;
  }

  if (length < 8) {
    alert('Password must contain at least 8 characters!');
    return null;
  }

  if (length > 128) {
    alert('Password cannot contain more than 128 characters!');
    return null;
  }

  var hasUpperCase = confirm('Do you want to use uppercase characters?');
  var hasLowerCase = confirm('Do you want to use lowercase characters?');
  var hasNumeric = confirm('Do you want to use numeric characters?');
  var hasSpecChar = confirm('Do you want to use special characters?');

  if (!hasUpperCase && !hasLowerCase && !hasNumeric && !hasSpecChar) {
    alert('Password must have at least one: uppercase, lowercase, numeric, and/or special character.');
    return null;
  }

  var passwordRequirements = {
    length: length,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumeric: hasNumeric,
    hasSpecChar: hasSpecChar
  };

  return passwordRequirements;
}

function getRandom(arr) {
  
// Function to get a random element from an array
  
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePasswordOptions() {
  var options = passwordRequirements();

  var currentArr = new Array()

  // Conditional Statement 
  
  if (options.hasUpperCase) {
    currentArr = currentArr.concat(upperCase);
  }
  if (options.hasLowerCase) {
    currentArr = currentArr.concat(lowerCase);
  }
  if (options.hasNumeric) {
    currentArr = currentArr.concat(numeric);
  }
  if (options.hasSpecChar) {
    currentArr = currentArr.concat(specChar);
  }

  console.log(currentArr);

  return { options: options, currentArr: currentArr };
}

function generatePassword() {
  var optionsObj = generatePasswordOptions(); 
  var options = optionsObj.options;
  var currentArr = optionsObj.currentArr;

  // Generate random string
  
  let pass = "";
  let i = 0;
  while (i < options.length) {
    pass += getRandom(currentArr);
    i++;
  }
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
