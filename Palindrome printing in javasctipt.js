//for the palindrome printing
let row='';
function f(num){
    for(let x=1;x<=num;x++){
        //now the internal printing
        row='';
        //for adding the spaces
        for(let y=1;y<=num-x;y++){
            row+=' ';
        }
        //for stars printing
        for(let z=1;z<=2*x-1;z++){
            row+='*';
        }
        console.log(row);
    }
}
f(4);
