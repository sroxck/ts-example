"use strict";
var only = { size: "only" };
// only.size = "333" //error 只读不可修改
//数组也拥有只读方式,onlyArray<E> 将所有可变的方法和属性去掉了
var arr = [1, 2, 3];
// arr.push(3) // arr上不存在push方法,因为push是可变方法
var arr2 = [];
// arr2 = arr 把readonly赋值给普通数组也不行
// 但是可以使用 as(类型断言)的方式赋值
arr2 = arr; // 成立
// readonly 和 const 的使用区别在于是想让变量只读还是属性只读,属性用readonly 变量用const,因为使用const,对象的属性也是可以改变的,只要不改变引用本身
