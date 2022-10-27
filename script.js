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
var spec = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","?"]
var result = '';



function generatePassword() {
    var lowercase = window.confirm("Do you want lowercase letters?");
    var uppercase = window.confirm("Do you want uppercase letters?");
    var numeric = window.confirm("Do you want numbers?");
    var special = window.confirm("Do you want special characters?");
    var length = prompt("How many characters do you want? Between 8-128 characters")
    var blank = [];
    

    if (length>128){
        alert("Please keep your password under 128 characters.")
        return 
    }
    else if (length<8){
        alert("Please keep your password above 8 characters.")
        return
    }
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
    function genRandom(){
        var result = [];
        function randomNumber(max){
            return Math.floor(Math.random()*max)
        }
        for (var i=0; i<length; i++){
            result = result.concat(blank[randomNumber(blank.length)])
        }
        return final = result.join("");
    }
    console.log(blank)
    console.log()
    return genRandom();
    
}
