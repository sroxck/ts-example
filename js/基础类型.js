var isBool = false;
var isString = "字符串";
var isNumber = 100;
var isArray = [1, 2, 3];
var isObj1 = { any: 333 };
var isObj2 = { size: '22' };
var isArraytwo = [1, 2, 3];
var isAny = "33";
var isAnyTwo = 333;
var isAnyArray = [1, '1', false];
var isTuple = ['2', 3];
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["pink"] = 2] = "pink";
    Color[Color["black"] = 3] = "black";
})(Color || (Color = {}));
var c = Color.pink;
function returnVoid() { }
var sfsf = null;
function returnString() { return "string"; }
var isNull = null;
function returnNever() {
    throw new Error();
}
function nameHaha(params) {
    console.log(params);
}
nameHaha({ b: 22, a: "s" });
function nameGaga(_a) {
    var a = _a.a, b = _a.b;
    console.log(a, b);
}
nameGaga({ a: 33, b: 'ss' });
var fn = function (ss) { return ss; };
var stringLength = "hello";
var stringLengthNuber1 = stringLength.length;
var stringLengthNuber2 = stringLength.length;
