//Function declaration
function addWhitespace(text) {
    return " " + text + " ";
}

console.log(addWhitespace("hoi"));

function multiply(value, multiplier) {
    return value * multiplier;
}

console.log(multiply(5, 10));

//Function expression
var foo = function () {
    return "bar";
};

console.log(foo());

var subtract = function(value, subtracter) {
    return value - subtracter;
};

console.log(subtract(255,50));