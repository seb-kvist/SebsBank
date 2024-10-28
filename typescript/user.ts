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
        return this.getBankBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.bankBalance += amount; // Adding to total amount
            console.log ("Deposited amount: ${amount} kr. Your new total bank balance is: ${this.bankBalance}");
        }
    }
}