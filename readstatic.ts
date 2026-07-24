class SmartPhone {
    public static brand: string = "Vivo";
    readonly modelNumber: string;
    name: string;
    constructor(name: string, modelNumber: string) {
        this.name = name;
        this.modelNumber = modelNumber;
    }
    display(): void {
        console.log("Phone Name:", this.name);
        console.log("Model Number:", this.modelNumber);
        console.log("Brand:", SmartPhone.brand);
    }
}
let phone1 = new SmartPhone("Fly", "TN-2026");
phone1.display();
// Access static property
console.log("Brand Name:", SmartPhone.brand);

