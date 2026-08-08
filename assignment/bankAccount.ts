class BankAccount {
    accountHolder: string;
    balance: number;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
    }
}

const account = new BankAccount("Vyshnavi", 5000);

account.deposit(2000);
account.withdraw(1500);
account.displayBalance();