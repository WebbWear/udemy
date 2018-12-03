/* Variable and Datatypes

var firstName = 'Jeff';
console.log(firstName);

var lastName = 'Webb';
var age = 45;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
*/

// Variable mutation
/*
var firstName = 'Jeff';
var age = 45;

console.log(firstName + ' ' + age);
*/

/*
var year, yearJeff, yearMaggie;
now = 2018;
ageJeff = 45;
ageMaggie = 14;

yearJeff = now - 45;
yearMaggie = now - 14;

console.log(yearJeff);
console.log (now + 2);


//Logical operators
var jeffOlder = ageJeff > ageMaggie;
console.log(jeffOlder);

// type operator
console.log(typeof jeffOlder);
*/

// Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 -6;
console.log(x, y);
*/
/*
var heightMark = 1.8; //meters
var massMark = 99.7; //kg

var heightJohn = 2;
var massJohn = 102;

mark = massMark / (heightMark * heightMark);
john = massJohn / (heightJohn * heightJohn);

var bmiGreater = mark > john;

console.log(bmiGreater);
*/

// if else
/*8/
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}  else {
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}  else {
    console.log(firstName + ' will hopefully marry soon');
}

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var heightMark = 1.8; //meters
var massMark = 99.7; //kg

var heightJohn = 2;
var massJohn = 102;

BMImark = massMark / (heightMark * heightMark);
BMIjohn = massJohn / (heightJohn * heightJohn);

if (BMImark > BMIjohn) {
    console.log('Mark\'s BMI is higher than John\'s. ');
} else {
    console.log('John\'s BMI is higher than Mark\'s. ');
}
*/
//Boolean logic
/*
var firstName = 'John';
var age = 31;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { 
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age <30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*
// The Ternary Operator and Switch Statements

var firstName = 'John';
var age = 45;

//Ternary
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// switch
var job = 'driver';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives a limo.');
        break;
    case 'designer':
        console.log(firstName + ' designs websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

*/

// Truthy and Falsy

// falsy: undefined, null, 0, '', NaN
// truthy values: NOT falsy
/*
var height;

height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (89 + 120 + 102) /3;
var scoreMike = (110 + 94 + 125) /3;
var scoreMary = (100 + 120 + 150) /3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with a score of ' + scoreJohn + ' points!'); 
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with a score of ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with a score of ' + scoreMary + ' points!');
} else { 
    console.log('There a draw!');
}
*/

// Functions
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;   
}

    var ageJeff = calculateAge(1973);
    var ageAnastasia = calculateAge(2008);
    var ageKathleen = calculateAge(1972);
    var ageGrandpa = calculateAge(1934);

    console.log(ageJeff, ageAnastasia, ageKathleen);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

    yearsUntilRetirement(1973, 'Jeff');
    yearsUntilRetirement(2008, 'Anastasia');
    yearsUntilRetirement(1973, 'Kathleen');
    yearsUntilRetirement(1934, 'Grandpa');

*/

//  JS Kids Book
/*
var randomBodyParts = ['Face', 'Head', 'Arm', 'Booty', 'Leg', 'Teeth', 'Foot', 'Hair'];
var randomAdjectives = ['Smelly', 'Ugly', 'Dumb', 'Stupid', 'Gross'];
var randomWords = ['Fly', 'Squirrel', 'Dog', 'Monkey', 'Rat', 'Turtle', 'Bunny', 'Cat'];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 8)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomInsult = 'Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + '!!!';

console.log(randomInsult);

*/

// Function Statements and Expressions

//Function declaration
// function whatDoYouDo(job, firstName) {}

//Function Expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a limo in Tampa.';
        case 'designer':
            return firstName + ' designs beautiful websites!';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('driver', 'Jeff'));
console.log(whatDoYouDo('teacher', 'Mark'));
console.log(whatDoYouDo('retired', 'Bob'));
*/
/*
// Arrays 
var names = ['Kathleen', 'Anastasia', 'Jeff', 'Barbara', 'Bob', 'Mike'];
var years = new Array(1972, 2008, 1973, 1936, 1934, 1971);

console.log(names);
console.log(names.length);

//Mutated array data
names[0] = 'Kat';
names[names.length] = 'Elvis';

console.log(names);
/*
// Different data types
/*
var john = ['John', 'Smith', 1990, 'teacher', false];
// Methods
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

// Code challenge #3 tip calculator 
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
    var percentage;
        if (bill < 50) {
            percentage = .2;
        }   else if (bill >= 50 && bill < 200) {
            percentage = .15;
        }   else {
            percentage = .1;
        }
        return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[0] + tips[1],
                   bills[0] + tips[2]];


console.log(tips, finalValues);
 */
/*
 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family:  ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'taecher',
     isMarried: false
 };


 
 //Retrieving dta from an object
// dot notation
 console.log(john.firstName);
 // brackets with key name
 console.log(john['lastName']);
 //declaring variable then use the var
 var x = 'birthYear';
 console.log(john[x]);

 //changing or mutating data
 john.job = 'designer';
 john['isMarried'] = true
 console.log(john);

 //new Object syntax dot notation
 var jane = new Object();
 jane.firstName = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);
*/



// Objects and Methods
//only objects have methods
//.this means current object
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1973,
    family:  ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'taecher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

/*
var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}

*/

// Loops and Iteration
/*

//  For loop
for (i = 1; i <= 100; i++) {
    console.log(i);
}
*/


var jeff = ['Jeff', 'Webb', 1973, 235, 'driver', true];
    for (var i = 0; i < jeff.length; i++) {
        console.log(jeff[i]);
    }

// While loop

var i = 0;
    while(i < jeff.length) {
        console.log(jeff[i]);
        i++;
    }

    // continue and break statements











