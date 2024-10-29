//Exporting user and its functionalities to (in this case) main.ts & bank.ts

export class User { //Declaring what type i.e. string, number etc the variable should hold. Private as a type of "inkapsling"
    private userName: string;   
    private passWord: string;
    private bankBalance: number;

    constructor
        (username: string, password: string) {
         this.userName = username;
         this.passWord = password;
         this.bankBalance = 0;
    }

    //Showing the bankbalance of the user --> Public makes it possible to call for this on whichever user.
    public getBankBalance(): number {
        return this.bankBalance;
    }

    //Deposit-method. Adds amount to bankBalance, notifies you when not adding anything (0)
    public deposit(amount: number): void {
        if (amount > 0) {
            this.bankBalance += amount; // Adding to total amount
            console.log ("Deposited amount: " + amount + " kr. Your new total bank balance is: " + this.bankBalance);
        } else {
            console.log("The amount must be greater than 0kr.")
        }
    }

    //Withdraw-method. Subtracts amount from bankBalance. Checks with <= if there is enough money to be withdrawn. 
    public withdraw(amount: number): void {
        if (amount <= this.bankBalance) { //Checking if amount is same or smaller than bank.balance
            this.bankBalance -= amount; //actual deducting method
            console.log("Withdrawn amount: " + amount + "kr. Your new total bank balance is: " + this.bankBalance);
        } else {
            console.log("Not enough money to withdraw."); //<-- replace console.logs with alerts in actual program
        }
    }

    public login(username: string, password: string): boolean {
        return this.userName === username && this.passWord === password;
    }
}