function f(question,yes,no){
    if(confirm(question)){
        yes();
    }
    else no();
}
f("Enter do u agree",function(){
    alert("You agreed isn't it")
},function(){
    alert("you dont agree")
});
