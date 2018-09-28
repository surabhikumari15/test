var u1 = { name: 'raj', age: 25, salary: 25000 };
console.log("Name: " + u1.name);
console.log("Age: " + u1.age);
console.log("salary: " + u1.salary);
var u2 = { name: 'raj', age: 25 };
console.log("Name: " + u2.name);
console.log("Age: " + u2.age);
var p1 = {
    abc: function () {
        return "just for demo";
    },
    xyz: function (a) {
        console.log("value of a:" + a);
    },
    sum: function (a, b) {
        return a + b;
    }
};
console.log(p1.abc());
p1.xyz(11);
console.log(p1.sum(20, 30, 30));
var arr;
arr = [1, 'abc', true];
arr[0] = 1;
arr[1] = 'abc';
arr[2] = false;
