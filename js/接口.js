"use strict";
// 通过下面的例子来看接口的工作流程
// 不使用接口
// 函数有一个参数,参数类型是对象(这里是用的字面量形式) 对象有一个size属性 类型是string
function printLabel(printObj) {
    console.log(printObj.size);
}
printLabel({ size: "333" });
// 接口就想是一个名字,用来描述需求,printObj的值的类型会经过接口的检查,他代表了有一个size属性,类型是string
// 类型检查器不会去验证属性的顺序只要相应的属性存在并且类型也是对的就可以。
function printLabeltwo(printObj) {
    console.log(printObj.size);
}
printLabel({ size: "333" });
var namess = "33";
var sroxck = { mouth: "small", face1: "big" };
