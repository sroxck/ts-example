"use strict";
function demo(colorobj) {
    var result = {};
    if (colorobj.color) {
        result.color = colorobj.color;
    }
    if (colorobj.number) {
        result.number = colorobj.number;
    }
    return result;
}
console.log(demo({ color: 'string', number: 233 }));
function demo2(colorobj) {
    // 
    console.log(colorobj);
}
demo2({ number: 33, name: 33 }); // 成立,可以添加接口中不存在的属性
// 还有一个方法绕过类型检查,因为不会经过额外属性检查
var method = { a: 33, b: 33 };
demo2(method);
