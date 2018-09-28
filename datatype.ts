class Emp{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    display():string
    {
        console.log("name:" +this.name);
        console.log("age:" +this.age);
        return "    ";
    }

}
let a=new Emp("arman",25);
a.display();
a.age=30;
a.display();