"use strict";
// 可以给变量使用函数类型接口,这样变量被赋值必须符合接口
var variable;
variable = function (name, gsgs) {
    return "str";
};
// 函数的参数名不必和接口定义相同,函数的参数会逐个进行检查,要求对应位置上的类型是正确的,顺序有要求
// 如果不指定函数参数,会自动进行推断,如下例
variable = function (name, gsds) {
    return name;
};
variable('sf', 333);
var arrlist = ['1', '2',];
var arrlist1 = { name: 'name' };
var arrlistthree = [1, 3, 4];
// arrlistthree[0] = 2 // 只读的索引签名是不可以通过索引修改值的
