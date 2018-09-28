interface User{
    name:string;
    age:number;
    salary?:number;
}
let u1={name:'raj',age:25,salary:25000}
console.log("Name: "+u1.name);
console.log("Age: "+u1.age);
console.log("salary: "+u1.salary);


let u2={name:'raj',age:25}
console.log("Name: "+u2.name);
console.log("Age: "+u2.age);


interface Person{
    abc():string;
    xyz(a:number);
    sum(a:number,b:number,c:number):number;
}
let p1: Person={
    abc:function(){
        return "just for demo"
    },
    xyz:function(a:number){
        console.log("value of a:" +a);

    },
    sum: function(a:number,b:number){
        return a+b;
    }
}
console.log(p1.abc());
p1.xyz(11);
console.log(p1.sum(20,30,30));


let arr:Array<any>;
arr=[1,'abc',true];
arr[0]=1;
arr[1]='abc';
arr[2]=false;

let arr1:Array<number>;
arr1=[1,2,3];
arr1[0]=1;
arr1[1]=2;
arr1[2]=3;