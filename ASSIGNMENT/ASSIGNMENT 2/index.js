//Q1.Find Grades//

let Marks = prompt("Enter Your Marks");
let inte = parseInt(Marks);
let grades;

switch (true){
    case inte <= 10:
        grades = "E";
    break;
    case inte >= 11 && inte <= 20:
        grades = "D";
    break;
    case inte >= 21 && inte <= 30:
        grades = "C";
    break;
    case inte >= 31 && inte <= 40:
        grades = "B";
    break;
    case inte >= 41 && inte <= 50:
        grades = "A";
    break;   
    default:
        grades = "invalid Marks";  
}
console.log(grades);

// // Q2. Get Value //
let char = prompt("Enter the characters frome this(P,Z,E,D)");

switch (true){
    case char === "P" || char ==="p":
        console.log("PrepBytes");
    break;
    case char === "Z" || char ==="z":
        console.log("Zenith");
    break;
    case char === "E" || char ==="e":
        console.log("Expert Coder");
    break;
    case char === "D" || char ==="d":
        console.log("Data Structure");
    break;
    default:
        output = "Invalid Character"

}

//Q3. Find the maximum out of three numbers.//

let A = prompt("Enter the value of A:");
let B = prompt("Enter the Value of B:");
let C = prompt("Enter the value of C:");

switch(true){
    case A > B && A > C:
        console.log("maximum out of three numbers :"+ A);
    break;
    case B > A && B > C:
        console.log("maximum out of three numbers :"+ B);
    break;
    case C > A && C > B:
        console.log("maximum out of three numbers :"+ C);
    default:
        max = "Invalid Value:"
}

//Q4. Second Smallest //

let X = 13;
let Y = 2;
let Z = 15;

let secondsmallest;

switch(true){
    case X < Y && X < Z:
        console.log("secondsmallest : " + X );
    break;
    case Y < X && Y < Z:
        console.log("secondsmallest : " + Y );
    break;
    case Z < X && Z < Y:
        console.log("secondsmallest : " + Z );
    break;
    default:
        console.log("Invalid Value : ");
       
}

// Q5. Check whether the triangle is Acute or Obtuse //

let I = 60;
let J = 80;
let K = 20;

let Anglesum = I + J + K;
if(Anglesum <= 180){
    if(I == 90 || J == 90 || K == 90 ){
        console.log("Right Triangle");
    }else if(I > 90 || J > 90 || K > 90 ){
        console.log("Obtuse Triangle");
    }else{
        console.log("Acute Triangle")
    }  
}else{
    console.log("Not A Triangle");
}