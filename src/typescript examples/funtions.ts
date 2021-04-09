type NumFunc = (x: number, y: number) => number;

const myAddFuncion: NumFunc = (a, b) => {
  return a + b;
};

const multiply: NumFunc = (a, b) => {
  return a * b;
};

type Vector = { x: number; y: number };
const position1: Vector = { x: 10, y: 20 };
const position2: Vector = { x: 0, y: 30 };

type SumVector = (v1: Vector, v2: Vector) => Vector;

const addVectors: SumVector = (v1, v2) => {
  const v3: Vector = { x: v1.x + v2.x, y: v1.y + v2.y };
  return v3;
};

function addListener(event: string, onEvent: () => void) {
  setTimeout(() => {
    onEvent();
  }, 1000);
}
