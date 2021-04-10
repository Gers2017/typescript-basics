"use strict";
//generics
function identity(arg) {
    return arg;
}
function printArray(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
function removeItem(arr, toRemove) {
    return arr.filter((item) => item !== toRemove);
}
//  Accepts any type (T) as parameter
//  The function returns the same type (T)
function myGenericFunc(arg) {
    return arg;
}
//  myGenericFunc<T> (arg: T) : T
myGenericFunc("Hello Generics"); //returns an string
//  The interface accepts myGenericFunc
const myGeneric = myGenericFunc;
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
