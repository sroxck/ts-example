var TimeTool = (function () {
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
