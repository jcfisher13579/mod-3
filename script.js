// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var spec = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","?"];
var result = '';


//function generates a random password of specified length
function generatePassword() {
    //these 4 window confirm statements store the given question as a boolean 
    var lowercase = window.confirm("Do you want lowercase letters?");
    var uppercase = window.confirm("Do you want uppercase letters?");
    var numeric = window.confirm("Do you want numbers?");
    var special = window.confirm("Do you want special characters?");
    var length = prompt("How many characters do you want? Between 8-128 characters")
    //length comes into use in the genRandom function
    var blank = [];
    
    //these two ifs confirm that the password is of sufficient length
    if (length>128){
        alert("Please keep your password under 128 characters.")
        return 
    }
    else if (length<8){
        alert("Please keep your password above 8 characters.")
        return
    }
    //these next 4 if statements add to the blank array the arrays with the characters the user input
    if (lowercase){
        blank = blank.concat(lower);
    } 
    if (uppercase){
        blank = blank.concat(upper);
    } 
    if (numeric){
        blank = blank.concat(num);
    } 
    if (special){
        blank = blank.concat(spec);
    } 
    if (blank.length<1) {
        alert("Your password has no characters to pick from!")
        return
    } 
    //this function generates a random string of var-length
    function genRandom(){
        var result = [];
        //the randomNumber function returns a random number
        function randomNumber(max){
            return Math.floor(Math.random()*max)
        }
        //this for loop calls the randomNumber function
        for (var i=0; i<length; i++){
            result = result.concat(blank[randomNumber(blank.length)])
        }
        return final = result.join("");
    }
    console.log(blank)
    console.log()
    return genRandom();
    
}
