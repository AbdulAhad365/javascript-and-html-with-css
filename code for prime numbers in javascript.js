//printing the prime numbers
function f(input){
    console.log("The prime numbers are: ")

    if(input==2){
      console.log(2);  
    }
    else if(input<2){
        console.log('none');
    }
   
    else{
        let boo;
        let half;
        
        for(let j=2;j<=input;j++){
            boo=true;
            
            for(let k=2;k<=j-1;k++){
                if(j%k==0){
                    boo=false;
                    break;
                }

        }
        if(boo){
        console.log(j);
    }
}
    }
}
f(20);
