//make the function to get a random number between 1-6
function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}
console.log( getRandomNumber (6));

//alert box
alert(getRandomNumber() );
//console
console.log (getRandomNumber() );
//store in variable
var dieRoll = getRandomNumber();