"use strict";
var Girl = (function () {
    function Girl(girls) {
        this.girls = girls;
    }
    Girl.prototype.getGirl = function (index) {
        return this.girls[index];
    };
    return Girl;
}());
var GirlOne = new Girl(['s']);
console.log(GirlOne.getGirl(0));
