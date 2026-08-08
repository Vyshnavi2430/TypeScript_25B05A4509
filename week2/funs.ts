// 1. Parameter & Return Type
function add(a: number, b: number): number {
    return a + b;
}

// 2. Default Parameter
function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

// 3. Optional Parameter
function displayInfo(name: string, age?: number): string {
    if (age !== undefined) {
        return `Name: ${name}, Age: ${age}`;
    }
    return `Name: ${name}`;
}

// 4. Rest Parameter
function calculateTotal(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Function Calls
console.log("1. Add:", add(10, 20));

console.log("2. Greet with default:", greet());
console.log("2. Greet with name:", greet("Alice"));

console.log("3. Optional parameter:");
console.log(displayInfo("John"));
console.log(displayInfo("John", 25));

console.log("4. Rest parameter:");
console.log(calculateTotal(10, 20, 30, 40));

