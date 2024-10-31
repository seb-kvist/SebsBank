//Exporting user 
export class User {
    constructor(username, password) {
        this.userName = username;
        this.passWord = password;
        this.bankBalance = 0;
    }
    //Logging in method. Checks if user & password matches log in credential.
    login(username, password) {
        return this.userName === username && this.passWord === password;
    }
    //Showing the bankbalance of the user --> Public makes it possible to call for this on whichever user.
    getBankBalance() {
        return this.bankBalance;
    }
    //Deposit-method. Adds amount to bankBalance.
    deposit(amount) {
        if (amount > 0) {
            this.bankBalance += amount; // Adding to total amount
        }
    }
    //Withdraw-method. Subtracts amount from bankBalance. Checks with <= if there is enough money to be withdrawn. 
    withdraw(amount) {
        if (amount <= this.bankBalance) { //Checking if amount is same or smaller than bank.balance
            this.bankBalance -= amount; //actual deducting method
        }
    }
}
