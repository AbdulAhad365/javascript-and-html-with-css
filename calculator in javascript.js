//create a calculator using the prompt read
let store={
  consider(){
    this.a=+prompt("ENTER THE FIRST VALUE");
    this.b=+prompt("Enter the second value");
  }
  ,sum(){
      alert("the sum is "+(this.a+this.b));
  },
  multiply(){
    alert("the multiply is "+(this.a*this.b));
  },
  subtract(){
    alert("the subtraction is "+(this.a-this.b));
  }
}
store.consider();
let operator=prompt("Enter operator +,-,*");
if(operator=='+'){
  store.sum();
}
else if(operator=='-'){
  store.subtract();
}
else if(operator=='*'){
  store.multiply();
}
