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
















