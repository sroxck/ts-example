"use strict";
var abs;
abs = "abs";
abs = 520;
var One = (function () {
    function One() {
        this.one = true;
    }
    One.prototype.say = function () {
        console.log('你好');
    };
    return One;
}());
var Two = (function () {
    function Two() {
        this.one = false;
    }
    Two.prototype.skill = function () {
        console.log('学js');
    };
    return Two;
}());
function save(name) {
    if (name.one) {
        name.say();
    }
    else {
        name.skill();
    }
}
save(new Two());
function save1(name) {
    if ('say' in name) {
        name.say();
    }
    else {
        name.skill();
    }
}
function add(num, num2) {
    if (typeof num === "string" || typeof num2 === "string") {
        return "" + num + num2;
    }
    return num + num2;
}
