/* Q1. Count Characters */


function CountCharacters(S){
    let countB = [0, 0];

    for(let i = 0; i < S.length; i++){
        if(S[i] === "A"){
            countB[0]++;
        }else if(S[i] === "D"){
            countB[1]++;
        }
    }
    console.log("A : "+ countB[0] + " Time");
    console.log("B : "+countB[1] + " Time");
}

let S= "AbaDd";
CountCharacters(S);

/* Q2. Count the Heads
*/

function DuplicateCharacter(Str){
    let charcount = {}

    for(let i = 0; i < Str.length ; i++){
        let character = Str[i];
        charcount[character] = (charcount[character] || 0) +1;
    }
    for(const key in charcount){
        if(charcount[key] > 1){
            console.log('Duplicate Character :' + key + ' Count :' + charcount[key]);
        }
    }
}

let  Str = "prepbytes";
DuplicateCharacter(Str);

/* Q3. Count the Vowels 
*/

let str1 = "kanishka govil";
let Count_Vowel = 0;

for(let i of str1){
    if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'
        || i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U'){
            Count_Vowel++;
        }
}
console.log("Vowel in String : " + Count_Vowel + " times");

/* Q4. Concatenate the Strings  */

let firstName = "Prep";
let lastName = "Bytes";
let concatenate = firstName + " " + lastName;

console.log(concatenate);

/* Q5. Find Length */


function findLength(Name){
    let count = 0;
    for(let i of Name){
        count++;
    }
    return count;
}

let Name = "kanishka govil";
console.log("Length Of String : "+ findLength(Name));

 /* Q6. Find the Winner */

function Game_Winner(record){
    let kannu = 0;
    let shru = 0;

    for(let i of record){
        if(i == 'k'){
            kannu++;
        }else if (i == 's'){
            shru++;
        }
    }
    if(kannu > shru){
        return "kannu";
    }else if(shru == kannu){
        return "Draw";
    }else {
        return "shru";
    }
}

let record = "ADDAAADDDAADDAAAA"
console.log("Winner is : "+Game_Winner(record));


 /* Q7. Join Strings */

function joinStrings(first , second){
    return first+second;
}
let first = "PrepBytes ";
let second = "Technologies";

console.log(joinStrings(first,second));

/* Q8 */

function Plain_Check(str2){
   const lowerS = str2.toLowerCase();
   let reverseS = ' ';

   for(let i = lowerS.length - 1; i >= 0; i--){
    reverseS += lowerS[i];
   }
   return lowerS === reverseS ? "True" : "False";
}

let str2 = "";
console.log(Plain_Check("Naman"));
console.log(Plain_Check("naman"));

/* Q9. Reverse the String */

function reverse_String(Sa){
    let reverseS = ' ';
    for(let i = Sa.length - 1; i >= 0; i--){
        reverseS += Sa[i];
    }
    return reverseS;

}
let Sa = "I am kanishka govil";
console.log(reverse_String(Sa));

/* Q10. Match the Strings  */

function String_Match(Sa1 , Sa2){
    if(Sa1 === Sa2){
        return "Yes";
    }else{
        return "No";
    }
}

let Sa1 = "Prepbytes";
let Sa2 = "Prepbytes";
console.log(String_Match(Sa1 , Sa2));

/* Q11. String Replace  */

function Replace() {
    let S = "Hi, I am You. You Prepbytes";
    
    const pattern = "You";
    const text = "Prepbytes";
    
    let updatedString = S.replace(pattern, text);
    
    return updatedString;
}

console.log(Replace()); 

/* Q12. Split the String  */

function Split_the_String(Stri){
    return Stri.split(" ");
}

let Stri = "I am shruti govil";
let result = Split_the_String(Stri);
console.log(result);


/* Q13. Count the Vowels and Consonants 
*/

let str3 = "prepbytes";
let vowels = 0;
let Consonants = 0;
for(let i of str3){
    if(i == "a" || i == "e" || i == "i" || i == "o" ||i == "u"){
        vowels++;
    }else{
        Consonants++;
    }
}
console.log("Vowels in the string are: ",+ vowels);
console.log("Consonants in the string are: ",+ Consonants);

