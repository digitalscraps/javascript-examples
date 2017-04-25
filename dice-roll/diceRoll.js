
//create a method to encapsulate the function
var dice = {
    sides: 6,
    //use an anonymous function
    roll: function () {
        var sides = 6;
        var randomNumber = Math.floor(Math.random() * dice.sides) + 1;
    console.log(randomNumber);
    }
}