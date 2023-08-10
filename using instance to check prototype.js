//now instance of to check the prototype
function person(name){
    this.name=name;
}
var check=new person("ahad cheema");
console.log(check instanceof person);
