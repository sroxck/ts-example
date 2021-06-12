"use strict";
var _State1;
(function (_State1) {
    _State1[_State1["success"] = 1] = "success";
    _State1[_State1["error"] = 3] = "error";
    _State1[_State1["info"] = 4] = "info";
})(_State1 || (_State1 = {}));
function getState(state) {
    if (state == _State1.success) {
        return 'success';
    }
    else if (state == _State1.error) {
        return 'error';
    }
}
