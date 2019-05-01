///////////////////////////////////////
// Lecture: Hoisting

// functions
// function decloration
// calculateAge(1973);

// function calculateAge(year) {
//     console.log(2019 - year);
// }

// function expression ( no hoisting must call function after code)
// var retirement = function(year) {
//     console.log(65 - (2019 - year));
// }

// retirement(1973);



// // variables Hoisting

// var age = 23;
//     console.log(age);
// //  defined in global

// function foo() {
//     var age = 65;
//     console.log(age);
//     // defined in local so you can use the "age" because they are defined differently
// }

// foo();
// console.log(age);



///////////////////////////////////////
// Lecture: Scoping
/* Scoping answers the question where can we access a certain variable? 
Each new function creates a scope: the scope/environment, in which the variables it defines are accessible
*/





// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//    var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     // console.log(a + b + c + d);
//     console.log(a + d)
// }




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2019 - year);
//     console.log(this);
// }

// var john = {
//     name: 'John',
//     yearOfBirth: 1991,
//     calculateAge: function() {
//         console.log(this);
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// john.calculateAge();

// var mike = {
//     name: 'Mike',
//     yearOfBirth: 1971
// };

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();


