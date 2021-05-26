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
var Lady = (function () {
    function Lady() {
        this.content = "你好";
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
var Goddess = (function (_super) {
    __extends(Goddess, _super);
    function Goddess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
var Demo = (function () {
    function Demo() {
        this.uname = "sroxck1";
        this.userName = "sroxck2";
    }
    return Demo;
}());
var DemoSon = (function (_super) {
    __extends(DemoSon, _super);
    function DemoSon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoSon.prototype.log = function () {
        console.log(this.uname);
    };
    return DemoSon;
}(Demo));
var Demo2 = (function () {
    function Demo2(name) {
        this.uname = name;
    }
    return Demo2;
}());
var p = new Demo2("sroxck");
console.log(p.uname);
var Demo3 = (function () {
    function Demo3(name) {
        this.name = name;
    }
    return Demo3;
}());
var person = new Demo3('sims');
console.log(person.name);
var DemoExtends = (function () {
    function DemoExtends(name) {
        this.name = name;
    }
    return DemoExtends;
}());
var DemoExtendsSon = (function (_super) {
    __extends(DemoExtendsSon, _super);
    function DemoExtendsSon(age) {
        var _this = _super.call(this, "sroxck:jdd") || this;
        _this.age = age;
        return _this;
    }
    return DemoExtendsSon;
}(DemoExtends));
console.log(new DemoExtendsSon(22).age, new DemoExtendsSon(22).name);
var Shower = (function () {
    function Shower(showerTime) {
        this.showerTime = showerTime;
    }
    Object.defineProperty(Shower.prototype, "shower", {
        get: function () {
            return this.showerTime - 10;
        },
        set: function (num) {
            this.showerTime = num + 10;
        },
        enumerable: false,
        configurable: true
    });
    return Shower;
}());
var xizao = new Shower(30);
xizao.shower = 40;
console.log(xizao.shower);
var MyShower = (function () {
    function MyShower() {
    }
    MyShower.viewShowerTime = function () {
        console.log(this.showerTime);
    };
    MyShower.showerTime = 20;
    return MyShower;
}());
MyShower.viewShowerTime();
var ReadonlyClass = (function () {
    function ReadonlyClass(name) {
        this._name = name;
    }
    return ReadonlyClass;
}());
console.log(new ReadonlyClass(22)._name);
