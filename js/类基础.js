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
// 类使用extends 继承,使用super调用父类
var Lady = /** @class */ (function () {
    function Lady() {
        this.content = "你好";
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
var Goddess = /** @class */ (function (_super) {
    __extends(Goddess, _super);
    function Goddess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 重写父类方法
    Goddess.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + "JOJO";
    };
    Goddess.prototype.sayHi = function () {
        return this.content + "hi!";
    };
    return Goddess;
}(Lady));
console.log(new Goddess().sayHello());
console.log(new Goddess().sayHi());
// 类的访问类型 public公共的,在类的内部和外部都可以调用,protected 受保护的,只能在类的内部使用,也可以在继承中的类中使用 private 私有的,只能在类的内部使用,继承的类的内部也不可用 默认是public 
var Demo = /** @class */ (function () {
    function Demo() {
        this.uname = "sroxck1";
        this.userName = "sroxck2";
    }
    return Demo;
}());
// let demoExample1 = new Demo().uname // 报错 不可访问 受保护的
// let demoExample2 = new Demo().userName // 报错 不可访问 私有的
var DemoSon = /** @class */ (function (_super) {
    __extends(DemoSon, _super);
    function DemoSon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoSon.prototype.log = function () {
        console.log(this.uname); // 成立 protected 可以在继承的类中访问
        // console.log(this.username) // 报错 private 只能在本类中使用
    };
    return DemoSon;
}(Demo));
