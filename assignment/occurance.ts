const arr: number[] = [1, 2, 2, 3, 4, 3, 2, 5, 1];

const count: { [key: number]: number } = {};

for (let num of arr) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}

console.log(count);