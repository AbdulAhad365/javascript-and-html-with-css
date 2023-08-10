let user={
    firstname:"ahad cheema",
    wow(){
        alert( `How are ${this.firstname} `);
    }
}
function f(user){
    alert("HELLO HOW ARE U "+user+"?");

}
let con=user.wow.bind(user);
con();
