function addStuff(a: number, b: number) {
  return a + b;
}

let stuff1 = 45555;
let stuff2 = "9000";

addStuff(stuff1 as number, stuff2 as any);

function SumOne(x: number | string) {
  if (typeof x === "string") x = parseInt(x);
  return x + 1;
}

let strPoints: string = "100";
let points: number = parseInt(strPoints);
let strOrNum: number | string = 500;

SumOne(strPoints);
SumOne(points);
SumOne(strOrNum as number);

function Any(param: any) {
  console.log(param);
}

Any(points);
Any(points as any);
