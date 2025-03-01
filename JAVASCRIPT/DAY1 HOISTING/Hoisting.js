
/* Hoisting */ 

console.log("==============");
var b=20;
console.log(b); // 20


var num1;
console.log(num1); // undefined
num1=50;

{
    var b2;                         
    console.log(b2); // undefined 
    b=20; 

}  




{
    a=10;
    console.log(a); // 10
    var a;
}
    

console.log("==================");

{
   let a;
   console.log(a); // undefined
   a=10; 
}
   

{
    first=45;
    console.log(first); // error can not access first before intilize

    let first;
}
