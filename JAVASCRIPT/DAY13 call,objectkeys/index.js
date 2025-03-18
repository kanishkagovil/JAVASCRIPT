// Call invokes the function and allows you to pass in arguments one by one. 

var Person1 = {firstname:'himani', lastname:'maheshwari'};

function test(greeting,year){
    console.log(greeting + ' ' + this.firstname + ' ' + this.lastname + ' ' + year);
}
test.call(Person1, ['hello']);

// Apply invokes the funciton and allows you to pass in arguments as an array.

var person2 = {firstname: 'kanishka', lastname: 'Govil'};

function test2(Greeting , year){
    console.log(Greeting + ' ' + this.firstname + ' ' + this.lastname + ' ' + year );
}

test2.apply(person2 , ['Hello', 2025]);

// Bind returns a new function, allowing you to pass in a this array and any number of arguments.

var person3 = {firstname: 'shruti' , lastname: 'Govil'};

function test3 (greeting, year){
    console.log(greeting + ' ' + this.firstname + ' ' + this.lastname + ' ' + year);
}

var user = test3.bind(person3);
user('Hello', 2025);

// Create Objects using Function Constructor;

function car(Make , Model, Year){
    this.Make = Make;
    this.Model = Model;
    this.Year = Year;
}

const car1 = new car('Fortuner', 'legender', 2024);
console.log(car1);

//Create objects using Class Constructor;

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(20, 10);
console.log(square);

// Object keys;

const user1 = {
    a: 'Student',
    b: 12
};
console.log(Object.keys(user1));
console.log(Object.values(user1));

// Question: Create a Object using function and class constructor
//  both, and give two properties to it name and age.

function Student(Name, age){
    this.Name = Name;
    this.age = age;
}

const student1 = new Student('kannu' , 24);
console.log(student1);

class Student2{
    constructor(Name, age){
        this.Name = Name;
        this.age = age;
    }
}
const student2 = new Student2('noni' , 19);
console.log(student2);

