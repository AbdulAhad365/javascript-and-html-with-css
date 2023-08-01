let arr=[1,2,3,4,55,6];
let arr2=[7,8,9,10,11,12,13];

//length of the array
console.log(arr.length);

//reverse function
console.log(arr.reverse());
//arr=[6, 55, 4, 3, 2, 1]

//concat function
console.log(arr.concat(arr2));

// entries properties
//store the object and print it
let store_obj=arr.entries(arr);
//print
//will store values in object with their index.
for(let v of store_obj){
    console.log(v);
};

//for the checking a certain condition in array in boolen
//every: is used.
console.log(arr.every(function(val){
    return val>=0
}));

//every function methord # 2 by the arrow function
console.log(arr.every(val=>val>=0));

//fill:  index value equal to 1 at given indexes
//syntax:   value, starting index, ending index
console.log(arr.fill(1,0,2));

//filter methord: return the elements in a arrays proving the statement
console.log(arr2.filter(function(val){
    return val>7;
}))

//find methord: return the value which satisfies condition
console.log(arr2.find(val=>val%2==0));

//findindexof:returns the index of the value that satisfies the condition(only first one)
console.log(arr2.indexOf(9));
