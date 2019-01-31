// Function Constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    };


Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

var john = new Person('John', 1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
*/




// Object.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);

    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1966;
john.job = 'driver';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

*/

// Primitives vs objects


// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects

var obj1 = {
    name: 'Jeff',
    age: 46
};
var obj2 = obj1;
obj1.age = 44;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 47;
var obj = {
    name: 'Kat',
    city: 'Tampa'
};

function change(a, b) {
    a = 46;
    b.city = 'St Pete';
}

change(age, obj);

console.log(age);
console.log(obj);












