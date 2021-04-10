"use strict";
function addStuff(a, b) {
    return a + b;
}
let stuff1 = 45555;
let stuff2 = "9000";
addStuff(stuff1, stuff2);
function SumOne(x) {
    if (typeof x === "string")
        x = parseInt(x);
    return x + 1;
}
let strPoints = "100";
let points = parseInt(strPoints);
let strOrNum = 500;
SumOne(strPoints);
SumOne(points);
SumOne(strOrNum);
function Any(param) {
    console.log(param);
}
Any(points);
Any(points);
