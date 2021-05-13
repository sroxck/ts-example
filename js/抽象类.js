"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DemoDemo = /** @class */ (function () {
    function DemoDemo() {
        this.names = "33";
    }
    DemoDemo.prototype.aha = function () {
        console.log(222);
    };
    return DemoDemo;
}());
var demodemo = /** @class */ (function (_super) {
    __extends(demodemo, _super);
    function demodemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sf = '33';
        return _this;
    }
    demodemo.prototype.logerr = function () {
        console.log("33");
    };
    return demodemo;
}(DemoDemo));
new demodemo().logerr();
console.log(new demodemo().names);
new demodemo().aha();
// 抽象类
// 格式: 在类的声明前加上abstract 即可声明抽象类
// 抽象方法 方法名前加abstract 并且不用写方法体,也可以定义抽象属性,但是不能定义静态抽象
// 抽象方法中可以定义成员变量,也可以定义普通方法和静态方法
// 继承抽象类,需要实现里面全部的抽象方法和抽象属性
