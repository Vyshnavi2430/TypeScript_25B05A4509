const arr: number[] = [1, 2, 3, 4, 5];
const n = 2;
const len = arr.length;
const k = n % len;
const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
console.log(rotatedArray);