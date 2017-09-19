//Variable Declare
var firstVar;
var secondVar, thirdVar, fourthVar, fifthVar, sixthVar, seventhVar,
    eighthVar, ninthVar, tenthVar, eleventhVar, twelfthVar,
    thirteenthVar, fourteenthVar, fifteenthVar, sixteenthVar;

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
sixteenthVar = "1200";

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
    thirteenthVar, fourteenthVar, fifteenthVar, sixteenthVar];

for (var i = 0; i < allVariables.length; i++) {
    console.log(typeof(allVariables[i]));
}

//Coercion
firstVar += secondVar;
console.log(firstVar);

fifthVar += fourteenthVar;
console.log(fifthVar);

twelfthVar += ninthVar;
console.log(twelfthVar);

eighthVar += fifteenthVar;
console.log(eighthVar);

sixthVar += seventhVar;
console.log(sixthVar);

eleventhVar += fourthVar;
console.log(eleventhVar);

thirdVar += sixteenthVar;
console.log(thirdVar);

//Als ik deze getallen wou optellen dan had ik parseInt() moeten gebruiken op de string nummer
sixteenthVar += thirteenthVar;
console.log(sixteenthVar);

console.log(typeof(sixteenthVar));