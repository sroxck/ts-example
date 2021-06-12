"use strict";
function out(str) {
    if (typeof str === 'string') {
        var list = str.split('');
        list.forEach(function (item) {
            console.log(item);
        });
    }
}
out('你好');
