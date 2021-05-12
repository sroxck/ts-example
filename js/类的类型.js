"use strict";
// 使用接口来描述类的方法和属性
var TimeTool = /** @class */ (function () {
    function TimeTool() {
    }
    TimeTool.prototype.setTime = function (date) {
        return date;
    };
    return TimeTool;
}());
var ss = new TimeTool();
console.log(ss.setTime(new Date()));
console.log(ss.currentTime);
