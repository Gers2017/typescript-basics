"use strict";
const myAddFuncion = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
const position1 = { x: 10, y: 20 };
const position2 = { x: 0, y: 30 };
const addVectors = (v1, v2) => {
    const v3 = { x: v1.x + v2.x, y: v1.y + v2.y };
    return v3;
};
function addListener(event, onEvent) {
    setTimeout(() => {
        onEvent();
    }, 1000);
}
