//Exporting user 
export class User {
    private userName: string;   
    private passWord: string;
    private bankBalance: number;

    constructor
        (username: string, password: string) {
         this.userName = username;
         this.passWord = password;
         this.bankBalance = 0;
    }

    //Logging in method. Checks if user & password matches log in credential.
    public login(username: string, password: string): boolean {
        return this.userName === username && this.passWord === password;
    }

    //Showing the bankbalance of the user --> Public makes it possible to call for this on whichever user.
    public getBankBalance(): number {
        return this.bankBalance;
    }

    //Deposit-method. Adds amount to bankBalance.
    public deposit(amount: number): void {
        if (amount > 0) {
            this.bankBalance += amount; // Adding to total amount
        }
    }

    //Withdraw-method. Subtracts amount from bankBalance. Checks with <= if there is enough money to be withdrawn. 
    public withdraw(amount: number): void {
        if (amount <= this.bankBalance) { //Checking if amount is same or smaller than bank.balance
            this.bankBalance -= amount; //actual deducting method
        }
    }
}