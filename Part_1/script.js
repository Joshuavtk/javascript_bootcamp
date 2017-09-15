//Variable Declare
var firstVar;
var secondVar, thirdVar, fourthVar, fifthVar, sixthVar, seventhVar,
    eigthVar, ninthVar, tenthVar, eleventhVar, twelfthVar,
    thirtheenthVar, fourteenthVar, fifteenthvar;

//Variable assign & primitives
firstVar = "B";
secondVar = "A";
thirdVar = 1;
fourthVar = true;
fifthVar = "bee";
sixthVar = 2;
seventhVar = false;
eigthVar = "c";
ninthVar = 3;
tenthVar = NaN;
eleventhVar = "d";
twelfthVar = 4.384937;
thirtheenthVar = null;
fourteenthVar = "e";
fifteenthvar = 593746283658263867;

//Reassign
tenthVar = "f";
thirtheenthVar = 6;

console.log(firstVar, secondVar);

var c = firstVar;
firstVar = secondVar;
secondVar = c;

console.log(firstVar, secondVar);
