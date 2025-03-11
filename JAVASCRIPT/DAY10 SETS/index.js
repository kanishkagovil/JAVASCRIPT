// maps and sets
let map1 = new Map();
map1.set("name","anni");
map1.set("age",50);
map1.set("contact",true);
console.log(map1.get("name"));
console.log(map1.get("i"));
console.log(map1.has("Email"));
// map1.clear();
map1.delete("age");
console.log(map1);

// sets
let set1 = new Set();
set1.add("shru");
set1.add("123456789");
set1.add("true");
// set1.clear();
// set1.delete(true)
console.log(set1.keys);
console.log(set1.values());
console.log(set1.has("shru"));
console.log(set1.entries());


let sayings = new Map ()
sayings.set('dog','woof')
sayings.set('cat','meow')
sayings.size
sayings.get('dog')
sayings.get ('fox')
sayings.has('fox')
sayings.delete('fox')
sayings.size
for (let [key,value] of sayings){
    console.log(key +'goes'+ value);
}


let myset = new Set ();
myset.add(1)
for (let [key,value] of sayings){
    console.log(key +'goes'  + value);
}