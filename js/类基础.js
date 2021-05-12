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
// 类的构造函数
var Demo2 = /** @class */ (function () {
    function Demo2(name) {
        this.uname = name;
    }
    return Demo2;
}());
var p = new Demo2("sroxck");
console.log(p.uname);
// 类的成员变量声明必须赋值或者在构造器里面赋值,可以简写
var Demo3 = /** @class */ (function () {
    function Demo3(name) {
        this.name = name;
    } // 省略成员变量的声音和构造函数方法体内的赋值,直接在参数上加入public修饰符就可以完成声明成员变量并赋值的工作
    return Demo3;
}());
var person = new Demo3('sims');
console.log(person.name); // 和上面相同的效果
//类的构造函数继承
var DemoExtends = /** @class */ (function () {
    function DemoExtends(name) {
        this.name = name;
    }
    return DemoExtends;
}());
var DemoExtendsSon = /** @class */ (function (_super) {
    __extends(DemoExtendsSon, _super);
    function DemoExtendsSon(age) {
        var _this = _super.call(this, "sroxck:jdd") // 子类继承父类的时候,子类如果要写构造方法,必须手动调用super()去执行父类的构造方法,此语句必须放在第一行(先有父,再有子)
         || this;
        _this.age = age;
        return _this;
        // 父类没有构造方法也必须调用,因为会有一个默认的空的构造函数
    }
    return DemoExtendsSon;
}(DemoExtends));
console.log(new DemoExtendsSon(22).age, new DemoExtendsSon(22).name);
