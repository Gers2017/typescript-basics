"use strict";
function addStuff(a, b) {
    return a + b;
}
var stuff1 = 45555;
var stuff2 = "9000";
addStuff(stuff1, stuff2);
function SumOne(x) {
    if (typeof x === "string")
        x = parseInt(x);
    return x + 1;
}
var strPoints = "100";
var points = parseInt(strPoints);
var strOrNum = 500;
SumOne(strPoints);
SumOne(points);
SumOne(strOrNum);
function Any(param) {
    console.log(param);
}
Any(points);
Any(points);
