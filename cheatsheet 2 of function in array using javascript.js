//now mapping
let n=[1,2,3,4,5];
//square
const store=n.flatMap(val=>[val**2])

//for each loop
const x=n.forEach(function(val){
    console.log(val**2)
});

//from methord: makes a string->array
let make_array=Array.from("ahad is good");
console.log(make_array);

//split: Convert the string into the array
const sto='My name is abdul ahad';
console.log(sto.split(' '));

//join: convert the array into the string
console.log(n.join(' '));

//include:checks specific element
console.log(n.includes(1));

//isarray: check array or not
console.log(Array.isArray(n));

//keys:return the index
const k=n.keys();
for(let s of k){
    console.log(s);
}

//mapping
console.log(n.map(val=>val**2));
