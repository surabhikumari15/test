var Emp = /** @class */ (function () {
    function Emp(name, age) {
        this.name = name;
        this.age = age;
    }
    Emp.prototype.display = function () {
        console.log("name:" + this.name);
        console.log("age:" + this.age);
    };
    return Emp;
}());
var a = new Emp("arman", 25);
a.display();
a.age = 30;
a.display();
