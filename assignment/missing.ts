const arr: number[] = [1, 2, 3, 5];

const n = arr.length + 1;
const expectedSum = (n * (n + 1)) / 2;

let actualSum = 0;

for (let num of arr) {
    actualSum += num;
}

const missingNumber = expectedSum - actualSum;

console.log(missingNumber);