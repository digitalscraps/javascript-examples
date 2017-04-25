
//simple object
//create a method to encapsulate the function
var dice = {
    // sides is a property of dice
    sides: 6,
    //use an anonymous function
    roll: function () {
        var sides = 6;
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    console.log(randomNumber);
    }
}


var dice10 = {
//change property to 10
    sides: 10,
    roll: function () {
        var sides = 6;
// this always references the owner of the object
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    console.log(randomNumber);
    }
}

