// add these two numbers. //
let a = 10;
let b = 20;
console.log('sum of '+ a + ' and ' + b + ' is : ' + (a+b) );

// output:
// sum of 10 and 20 is : 30
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>

//  Find if the conditions are obeyed or not?  //

let A = 9;
let B = 7;
console.log(A < 10 || A < B);

// output:
// true.
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>

// // Check the conditions  

// 1. if both are divisible by 10 console true. 
let C = 20;
let D = 30;
console.log(C % 10 == 0 && D % 10 == 0);

// output:
// true.
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>

// 2. if both are not divisible by 10 console false. 
let c = 20;
let d = 13;
console.log(c % 10 == 0 && d % 10 == 0 );

// output:
// false.
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>> 


// 3. if one of them only is divisible by 10 console true.
let E = 13;
let F = 30;
console.log(E % 10 == 0 || F % 10 == 0);

// output:
// true.
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>

// .Find the first digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the first digit of that 
// number. 
// Note: You have to complete First_Digit function. No need to take any input.

let e = 5043;
let res= Math.floor( e / 1000);
console.log('first digit of a 4 digit Number '+ e + ' is : ' + res);

// output:
// first digit of a 4 digit Number 5043 is : 5
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>


//.Find the last digit of a 4 digit number 
// You are provided a four digit number N only. Your task is to print out the last digit of that 
// number. 
// Note: You have to complete Last_Digit function. No need to take any input.

let G = 5403;
let Last= G % 10;
console.log('last digit of a 4 digit Number '+ G + ' is : ' + Last);

// output:
// last digit of a 4 digit Number 5403 is : 3
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>

//. Find the remainder 
// You are provided with two numbers A� and B� where A� as divisor and B� as dividend.Your 
// task is find the remainder. 
// Note: You have to complete Find_the_remainder function. No need to take any input. 

let g = 23;
let h = 5;
let remainder = g / h;
console.log('Remainder : '+remainder);

// output:
// Remainder : 4.6
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>

//. Multiply two Numbers 
// You are provided with two numbers A� and B�. Your task is to multiply these two numbers. 
// Note: You have to complete Multiply_two_number function. No need to take any input.

let i = 10;
let j = 5;
let result= i * j;
console.log('Multiplication of two Numbers ' + i + ' * ' + j + ' is: ' + result);

//output:
// Multiplication of two Numbers 10 * 5 is: 50
//------------------------------------------------------------------------------------>>>>>>>>>>>>>>>

// . Marks Calculator 
// Shyam has got his marks in three subjects as A�, B�, and C� (out of 100).Write a program to 
// calculate his total marks and his average. 

let english = 70;
let maths = 84;
let Scienct = 90;
let total = english + maths + Scienct;
let average = total / 3;
console.log('Total marks of kannu is : ' + total);
console.log('Average of kannu is : ' + average)

// output :
// Total marks of kannu is : 244
// index.js:77 Average of kannu is : 81.33333333333333
//---------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>