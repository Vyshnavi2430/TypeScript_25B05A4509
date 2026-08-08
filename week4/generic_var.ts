class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log("Value:", this.value);
    }
}
let numberBox = new Box<number>(125);
let stringBox = new Box<string>("TypeScript");
numberBox.display();
stringBox.display();