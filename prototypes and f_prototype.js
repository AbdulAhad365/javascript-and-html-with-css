let rabbit={
    ability:"jump",
}
let animal={
    eats:"food",
    __proto__:rabbit

}

console.log(animal.ability);

//function:
function f(name){
    this.name=name;
    
    
}
f.prototype=animal;
let stored_final=new f("ahad cheema");//stored__proto__=animal;
console.log(stored_final.ability);
