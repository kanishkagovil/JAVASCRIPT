        
// Q1. 
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}

// Q2.
for (let i = 1; i <= 45; i++) { 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Q.3
var numbersArray = [1,13,22,123,49]

var sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log(sum); 
// Output: 178


// Q4.
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 

let sum = 0;

for (let i = 0; i < arr_1.length; i++) {
    sum += arr_1[i];
}

for (let i = 0; i < arr_2.length; i++) {
    sum += arr_2[i];
}

console.log(sum);
// Output: 627

// Q5.
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
// Output:  
//  true
// 3.5
// be
// false
// cannot
// true