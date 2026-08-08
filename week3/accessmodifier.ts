class DigitalWallet {
    public owner: string;
    private balance: number;
    protected walletId: string;

    constructor(owner: string, balance: number, walletId: string) {
        this.owner = owner;
        this.balance = balance;
        this.walletId = walletId;
    }

    public showBalance(): void {
        console.log(`${this.owner}'s wallet balance: ₹${this.balance}`);
    }

    public addMoney(amount: number): void {
        this.balance += amount;
        console.log(`₹${amount} added successfully.`);
    }
}

const wallet = new DigitalWallet("Vyshnavi", 1000, "WLT101");
console.log(wallet.owner);
wallet.addMoney(500);
wallet.showBalance();