///////////////////////////////////////
// Lecture: Hoisting

// functions
/*
calculateAge(1973);

function calculateAge(year) {
    console.log(2018 - year);
}


// variables

var age = 23;
    console.log(age);
//  defined in global

function foo() {
    var age = 65;
    console.log(age);
    // defined in local so you can use the "age" because they are defined differently
}

foo();
console.log(age);

*/

///////////////////////////////////////
// Lecture: Scoping
/* Scoping answers the question where can we access a certain variable? 
Each new function creates a scope: the scope/environment, in which the variables it defines are accessible
*/





// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain
/*

var a = 'Hello!';
first();

function first() {
  /*  var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


*/

///////////////////////////////////////
// Lecture: The this keyword









