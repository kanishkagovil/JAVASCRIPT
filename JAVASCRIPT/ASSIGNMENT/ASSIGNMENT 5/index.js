//JS_ASSIGNMENT5 QUESTION OF ARRAY--------------------------------------------

//Q1. Find the Product?

//Answering

let arr1 = [1, 2, 3, 4, 5];
function Find_Prod(arr1) {
    let product = 1;
    for (let i = 0; i < arr1.length; i++) {
        product *= arr1[i];
    }
    console.log(product);
}
Find_Prod(arr1);


//Q2. Find the Sum?

//Answering

let arr2 = [1, 2, 3, 4, 5];
function Find_Sum(arr2) {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i]    }
    console.log(sum);
}
Find_Sum(arr2);

//Q3. Count Occurrences?

//Answering

let arr3 = [3, 3, 3, 1, 2];
let k = 3;
function findCount(arr3, k) {
    let count = 0;
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === k) {
            count++;
        }
    }
    console.log(count);
}
findCount(arr3, k);

//Q4. Even Odd Sum?

//Answering

let arr4 = [1, 2, 3, 4, 5, 6, 7];
function findEvenOdd(arr4) {
    let evenSum = 0, oddSum = 0;
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] % 2 === 0) {
            evenSum += arr4[i];
        } else {
            oddSum += arr4[i];
        }
    }
    console.log([evenSum, oddSum]);
}
findEvenOdd(arr4);


//Q5. Find Number Presence?

//Answering

let arr5 = [1, 2, 3, 4, 5];
let m = 2;
function Find_Num(arr5, m) {
    if (arr5.includes(m)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
Find_Num(arr5, m);

//Q6. Higher Age?

//Answering

let arr6 = [11, 23, 3, 45, 72, 68];
highAge(arr6);
function highAge(arr6) {
    let result = arr6.filter(age => age >= 18);
    console.log(result);
}

//Q7. Increment the Array Elements?

//Answering

let arr7 = [1, 2, 3, 4, 5];
Inc_Arr(arr7);
function Inc_Arr(arr7) {
    let incrementedArr = arr7.map(num => num + 1);
    console.log(incrementedArr.join(" "));
}

//Q8.Pass or Fail?

//Answering

let arr8 = [13, 89, 45, 98, 67, 45, 54];

function isAllPass(arr8) {
    for (let i = 0; i < arr8.length; i++) {
        if (arr8[i] < 32) {
            return "NO";
        }
    }
    return "YES";
}
console.log(isAllPass(arr8));

//Q9. Unique Color Shirt?

//Answering

let arr9 = [3, 2, 4, 1, 2, 3];
function uniqueShirts(arr9) {
    let freq = {};
    for (let i = 0; i < arr9.length; i++) {
        freq[arr9[i]] = (freq[arr9[i]] || 0) + 1;
    }
    let uniqueColors = Object.values(freq).filter(count => count === 1);
    return uniqueColors.length;
}

console.log(uniqueShirts(arr9));

//Q10. Min and Max?

//Answering

let arr10 = [66, 33, 11, 44, 66, 22, 77];
function findMinMax(arr10) {
    let min = Math.min(...arr10);
    let max = Math.max(...arr10);
    return [min, max];
}
console.log(findMinMax(arr10));