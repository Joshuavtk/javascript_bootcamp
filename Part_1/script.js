//Variable Declare
var firstVar;
var secondVar, thirdVar, fourthVar, fifthVar, sixthVar, seventhVar,
    eighthVar, ninthVar, tenthVar, eleventhVar, twelfthVar,
    thirteenthVar, fourteenthVar, fifteenthVar;

//Variable assign & primitives
firstVar = "B";
secondVar = "A";
thirdVar = 1;
fourthVar = true;
fifthVar = "bee";
sixthVar = 2;
seventhVar = false;
eighthVar = "c";
ninthVar = 3;
tenthVar = "Z";
eleventhVar = "d";
twelfthVar = 4.384937;
thirteenthVar = -5;
fourteenthVar = "e";
fifteenthVar = 593746283658263867;

//Reassign
tenthVar = "f";
thirteenthVar = 6;

console.log(firstVar, secondVar);

var variableSwap = firstVar;
firstVar = secondVar;
secondVar = variableSwap;

console.log(firstVar, secondVar);

//Introspection
var allVariables = [secondVar, thirdVar, fourthVar, fifthVar, sixthVar, seventhVar,
    eighthVar, ninthVar, tenthVar, eleventhVar, twelfthVar,
    thirteenthVar, fourteenthVar, fifteenthVar];

for (var i = 0; i < allVariables.length; i++){
    console.log(typeof(allVariables[i]));
}