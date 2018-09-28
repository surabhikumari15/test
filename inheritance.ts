 abstract class Emp{
    name;
    age;
    salary;
    desig;

constructor(name,age,salary,desig)
{
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.desig=desig;
}
display()
    {
        console.log("Nmae:"+this.name);
        console.log("age: "+this.age);
        console.log("salary:"+this.salary);
        console.log("designatihis.on:"+this.desig);
    }
}
export class Manager extends Emp{
    id;
    address;
    constructor(id,name,age,salary,desig,address){

    
    super(name,age,salary,desig);
    this.id=id;
    this.address=address;
}
displayAll()
{
    super.display();
    console.log("ID:"+this.id);
    console.log("address:"+ this.address);
}
}
let e1=new Manager(101,"sur",25,20000,"tester","hsr");
e1.displayAll();
