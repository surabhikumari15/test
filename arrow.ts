function multiplyDemo(x,y)
{
    return x*y;
}
let res1=multiplyDemo(10,20);
console.log("Result 1:"+res1);


var multiplyDemo2=(x,y)=>x*y;
let res2=multiplyDemo2(20,20);
console.log("Result 2:" +res2);


class Abc{
    name="sunsoft";
    display(){
        setTimeout(function(){
console.log(this.name)},3000);
        }
    }
let a1=new Abc();
a1.display();

class Xyz{
    name="sunsoft";
    display(){
        setTimeout(()=>{
console.log(this.name)},3000);
        }
    }
let a2=new Xyz();
a2.display();


class Abcd{
    name="sunsoft";
    display(){
        var xyz=this;
        setTimeout(function(){
console.log(xyz.name)},3000);
        }
    }
let a3=new Abcd();
a3.display();