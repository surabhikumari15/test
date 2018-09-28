"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Emp = /** @class */ (function () {
    function Emp(name, age, salary, desig) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.desig = desig;
    }
    Emp.prototype.display = function () {
        console.log("Nmae:" + this.name);
        console.log("age: " + this.age);
        console.log("salary:" + this.salary);
        console.log("designatihis.on:" + this.desig);
    };
    return Emp;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, age, salary, desig, address) {
        var _this = _super.call(this, name, age, salary, desig) || this;
        _this.id = id;
        _this.address = address;
        return _this;
    }
    Manager.prototype.displayAll = function () {
        _super.prototype.display.call(this);
        console.log("ID:" + this.id);
        console.log("address:" + this.address);
    };
    return Manager;
}(Emp));
exports.Manager = Manager;
var e1 = new Manager(101, "sur", 25, 20000, "tester", "hsr");
e1.displayAll();
