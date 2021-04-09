//generics
function identity<T>(arg: T): T {
  return arg;
}
function printArray<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(item);
  });
}

function removeItem<T>(arr: T[], toRemove: any): T[] {
  return arr.filter((item) => item !== toRemove);
}

interface generericInterface {
  <T>(arg: T): T;
}
//  Accepts any type (T) as parameter
//  The function returns the same type (T)
function myGenericFunc<T>(arg: T): T {
  return arg;
}
//  myGenericFunc<T> (arg: T) : T
myGenericFunc<string>("Hello Generics"); //returns an string
//  The interface accepts myGenericFunc
const myGeneric: generericInterface = myGenericFunc;

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
