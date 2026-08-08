class Plant {
    name: string;
    moistureLevel: number;
    constructor(name: string, moistureLevel: number) {
        this.name = name;
        this.moistureLevel = moistureLevel;
    }
    showStatus(): void {
        if (this.moistureLevel < 40) {
            console.log(`${this.name} needs water`);
        } else {
            console.log(`${this.name} is healthy`);
        }
    }
}
const plant1 = new Plant("Rose", 30);
const plant2 = new Plant("Aloe Vera", 70);
plant1.showStatus();
plant2.showStatus();