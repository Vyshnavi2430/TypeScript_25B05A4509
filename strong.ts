function factorial(n: number): number {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function isStrongNumber(num: number): boolean {
    let original = num;
    let sum = 0;

    while (num > 0) {
        const digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

const num = 145;

if (isStrongNumber(num)) {
    console.log(`${num} is a Strong Number`);
} else {
    console.log(`${num} is not a Strong Number`);
}