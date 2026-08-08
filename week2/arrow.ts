// 1. Traditional Named Function (Full Form)
function factorial(n: number): number {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// 2. Arrow Function (Concise Form)
const factArrow = (n: number): number => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
};


// 3. Shorthand Arrow Function
const factShort = (n: number): number =>
    n === 0 ? 1 : n * factShort(n - 1);

console.log("Traditional Function:", factorial(5));

console.log("Arrow Function:", factArrow(5));

console.log("Shorthand Arrow Function:", factShort(5));