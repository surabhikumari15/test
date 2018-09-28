function multiplyDemo(x, y) {
    return x * y;
}
var res1 = multiplyDemo(10, 20);
console.log("Result 1:" + res1);
var multiplyDemo2 = function (x, y) { return x * y; };
var res2 = multiplyDemo2(20, 20);
console.log("Result 2:" + res2);
var Abc = /** @class */ (function () {
    function Abc() {
        this.name = "sunsoft";
    }
    Abc.prototype.display = function () {
        setTimeout(function () {
            console.log(this.name);
        }, 3000);
    };
    return Abc;
}());
var a1 = new Abc();
a1.display();
var Xyz = /** @class */ (function () {
    function Xyz() {
        this.name = "sunsoft";
    }
    Xyz.prototype.display = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name);
        }, 3000);
    };
    return Xyz;
}());
var a2 = new Xyz();
a2.display();
var Abcd = /** @class */ (function () {
    function Abcd() {
        this.name = "sunsoft";
    }
    Abcd.prototype.display = function () {
        var xyz = this;
        setTimeout(function () {
            console.log(xyz.name);
        }, 3000);
    };
    return Abcd;
}());
var a3 = new Abcd();
a3.display();
