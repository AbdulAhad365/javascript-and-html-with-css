//reduce methord: to shorten the array to 1 element
const arr=["ahad ","is ","good person."];
const ss=arr.reduce((f,l)=>f+l);
console.log(ss)

//values function:
//return a new value array with same values
const n=arr.values();
for(let x of n){
    console.log(x);
}
