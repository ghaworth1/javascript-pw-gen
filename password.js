// Assignment Code
var generateBtn = document.querySelector("#generate");

//strings to be populated 
var password1 = " a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,";
var finalPassword = "";
var password;

//variables
var upperCase = " A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,";
var numbers = " 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,";
var special = " ~, !, #, $, %, ^, &, *, (, ), -, +, =, <, >, /, ?, ;, :, [, ], {, },";
var pwLengthParse;
var passwordArray;

// create a function called "generatePassword"
function generatePassword() {
  askAboutLength();

  console.log(password1);                //gives an array with a length
  var passwordArray = password1.split(" ");
  for (let i = 0; i < pwLengthParse; i++){
    let randomChar = Math.floor(Math.random(i) * pwLengthParse) + 1;     ///something is breaking around here??
    passwordArray.push(randomChar);
    console.log(passwordArray);
    return password;
  }
}

//Functions to set parameters

function random(min, max){
  return Math.random() * (max - min) + min;
}
function randomizer(){
  console.log(passwordArray[Math.floor(random(8, pwLengthParse)) -8 ]);
}

function askAboutLength(){            //1st step, sets pwLength
  var pwLength = prompt("How many characters? Answer must be between 8 and 128.");
  pwLengthParse = parseInt(pwLength);             //turns string into number
  if (pwLengthParse < 8) {
  alert("Password must have more than 7 characters.");
  return;
  } else if (pwLengthParse > 128){
    alert("Password must have fewer than 128 characters.");
    return;
  } else {
    console.log(pwLengthParse);
    askAboutCase();   //calls the next step...
    return pwLengthParse;
  }
}

function askAboutSpecial(){
  var answer0 = confirm("Do you want special characters?");
  if (answer0 === true) {
    password1 += special;              //adds the special string
    console.log("added special");
    return password1;
  } else {
    console.log("no special chars");
    return password1;
  }
}

function askAboutCase(){
  var answer1 = confirm("Would you like Upper and Lower case?");
  if (answer1 === true){
    password1 += upperCase;    //adds uppercase
    console.log("added upper");
    askAboutNum();
    return password1;
  } else {
    console.log("no upper case");
    askAboutNum();
    return password1;
  }
}

function askAboutNum(){
  var answer2 = confirm("Would you like numbers in your Password?");
  if (answer2 === true){
    password1 += numbers;
    console.log("added numbers");
    askAboutSpecial();
    return password1;
  } else {
    console.log("no numbers");
    askAboutSpecial();
    return password1;
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordArray;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);