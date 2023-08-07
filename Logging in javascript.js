//program for login in
let userName=prompt("Enter your name","");
if(userName=='admin'){
    let password=prompt('Enter the password');
    if(password=='master'){
        alert('welcome master');
    }
    else if(password==''){
        alert('canceled');
    }
    else{
        alert('wrong password entered');
    }
}
else if(userName==''){
    alert('Canceled');
}
else{
    alert("i dont know u");
}
