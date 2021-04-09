"use strict";
var myAddFuncion = function (a, b) {
    return a + b;
};
var multiply = function (a, b) {
    return a * b;
};
var position1 = { x: 10, y: 20 };
var position2 = { x: 0, y: 30 };
var addVectors = function (v1, v2) {
    var v3 = { x: v1.x + v2.x, y: v1.y + v2.y };
    return v3;
};
function addListener(event, onEvent) {
    setTimeout(function () {
        onEvent();
    }, 1000);
}
