
//simple object
//create a method to encapsulate the function
var dice = {
    // sides is a property of dice
    sides: 6,
    //use an anonymous function
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return (randomNumber);
    }
}


