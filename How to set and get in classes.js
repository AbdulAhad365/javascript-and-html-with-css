//now making the class
class well{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(v){
        if(v.length <4){
            console.log("name is too short");
        }
        else{
            this._name=v;
            console.log("name is updated");
            return;
        }
    }
}
console.log(new well("ahad cheema").name);
