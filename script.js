


// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // var length = 4,
  var charset = "abcdefghijklmnopqrstuvwxyz";
  var charsetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charsetNum = "0123456789";
  var charsetSym = "@#$%^&*_=+-/€.?<>)";
  PWG = "";
  var generatedPassword = ""
  var PasswordLength = window.prompt("Choose a number between 8 and 128?");
  PasswordLength = parseInt(PasswordLength);
  console.log(typeof (PasswordLength));
  if (PasswordLength < 8 || PasswordLength > 128) {
    window.alert("Not Valid Length");
  } else if (isNaN(PasswordLength)) {
    window.alert("Number Required");
  }
  // characters

  console.log(PWG);

  // prompts
  var checkcharset = window.confirm("Would you like Lowercase?");
  var checkcharsetCap = window.confirm("Would you like Uppercase?");
  var checkcharsetNum = window.confirm("Would you like Numbers?");
  var checkcharsetSym = window.confirm("Would you like Symbols?");

  if (!checkcharset && !checkcharsetCap && !checkcharsetNum && !checkcharsetSym) {
    window.alert("Must Choose Atleast One!");

  }


  if (checkcharset) {
    PWG += charset;
  }
  if (checkcharsetCap) {
    PWG += charsetCap;
  }
  if (checkcharsetNum) {
    PWG += charsetNum;
  }
  if (checkcharsetSym) {
    PWG += charsetSym;
  }
  console.log(PWG);

  // math floor
  for (var i = 0; i < PasswordLength; ++i) {
    generatedPassword += PWG.charAt(Math.floor(Math.random() * Math.floor(PWG.length)));
    //PWG += charsetCap.charAt(Math.floor(Math.random() * n));
    //PWG += charsetNum.charAt(Math.floor(Math.random() * n));
    //PWG += charsetSym.charAt(Math.floor(Math.random() * n));
  }
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
