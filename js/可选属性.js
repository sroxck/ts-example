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
    console.log(colorobj);
}
demo2({ number: 33, name: 33 });
var method = { a: 33, b: 33 };
demo2(method);
