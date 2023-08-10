let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
        for(let v of Object.values(group.students)){
            alert(group.title+": "+v);
        }
    },
    arr(){
        this.students.forEach(stu=>{
            alert(this.title+": "+stu)
        })
    }
  };
  
  group.arr();
