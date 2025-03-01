/** example of spread operator */

let str="kannu";
console.log(...str);


let str2="Govil";
console.log(...str2);


/*** Example of spreed operator in object */

let obj={
      name:"kannu",
      age:24
}

let obj2={
      
    gender:"Female"
}


let obj3={
    ...obj,
    ...obj2,
    salary:2000000
}
console.log(obj2);

console.log(obj);


console.log(obj3);
