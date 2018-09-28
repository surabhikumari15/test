class Emp{
name;
age;
salary;
constructor(name,age,salary)
{
this.name=name;
this .age=age;
this.salary=salary;
}
display()
{
console.log("Name:" +this.name);
console.log("AGE:" +this.age);
console.log("Salary:" +this.salary);
}
}
let e1= new Emp("surabhi",25,30000);
let e2= new Emp("krishna",27,200000);
let e3= new Emp("ram",29,35000);
let e4= new Emp("shyam",28,300000);

e1.display();
e2.display();
e3.display();
e4.display();



