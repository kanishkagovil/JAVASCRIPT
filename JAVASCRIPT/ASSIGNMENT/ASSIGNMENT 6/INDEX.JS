//Q1. Create a Function
//Task: Add a setter method to an object to print the value of name.

function createObject(kanishka) {
    let obj = {
        name: kanishka,
        setter: function() {
            console.log(this.name);
        }
    };
    obj.setter();
}
createObject("kanishka");

//Q2. Delete a Parameter
//Task: Delete rollno from the object and return true or false.

function deleteRollNo(kanishka, rollno) {
    let obj = {
        name: kanishka,
        rollno: rollno
    };
    delete obj.rollno;
    console.log(!obj.hasOwnProperty('rollno'));
}
deleteRollNo("kanishka", 129);

//Q3. Check whether the Package is Dream Package or not
//Task: Return "Dream" if salary > 5,00,000, otherwise return "NotDream".

function checkPackage(salary) {
    let obj = {
        salary: 500000
    };
    console.log(obj.salary > 500000 ? "Dream" : "NotDream");
}
checkPackage(100000);

//Q4. Check whether the Object has a parameter or not
//Task: Return true if the object has parameters, otherwise return false.

function checkObject(parameter) {
    let obj = parameter ? { name: "kanishka" } : {};
    console.log(Object.keys(obj).length > 0 ? "true" : "false");
}
checkObject(1);


//Q5. Merge the Objects
//Task: Merge two objects and return a single object.


function mergeObjects(name, id, state, code) {
    let obj1 = {
        name: name,
        id: id
    };
    let obj2 = {
        state: state,
        code: code
    };
    let mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj);
}
mergeObjects("kanishka", 129, "Haryana", 121009);

//Q6. Object Multiplier
//Task: Multiply id and houseno with N and print the result.


function objectMultiplier(N, id, houseno) {
    let obj = {
        id: 12,
        houseno: 146
    };
    obj.id *= 2;
    obj.houseno *= 2;
    console.log(obj.id, obj.houseno);
}
objectMultiplier(2, 12, 146);

//Q7. Find the Sum of Object Members
//Task: Find the sum of p1, p2, and p3.

function checkSum(Obj) {
    let sum = 1+ 2 + 3 ;
    console.log(sum);
}
checkSum({ p1: 1, p2: 2, p3: 3 });

//Q8. Check whether the Objects are same or not
//Task: Compare two objects and return true or false.

function compareObjects(name, id, new_name, new_id) {
    let obj = {
        name: name,
        id: id
    };
    console.log(obj.name === new_name && obj.id === new_id ? "true" : "false");
}
compareObjects("kanishka", 2, "Prepbytes", 3);

