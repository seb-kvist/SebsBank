//Importerar user-data till vår bank.ts fil.
import { User } from "./user.js";
//Exporting class and its functionalities to main.ts
export class Bank {
    constructor() {
        this.loggedInUser = null;
    }
    // Log in method. Checking if provided username and password match the hardcoded ones
    login(username, password) {
        if (username === "test" && password === "test") {
            this.loggedInUser = new User(username, password);
            return true;
        }
        else {
            return false;
        }
    }
    // Log out method. Sets the logged out user to nulll
    logout() {
        this.loggedInUser = null;
    }
    //Shows the balance of the logged in-user or null if none is logged in.
    getBalance() {
        if (this.loggedInUser) {
            return this.loggedInUser.getBankBalance();
        }
        else {
            return null;
        }
    }
    //The deposit method. Adds amount to the logged in user balance
    deposit(amount) {
        if (this.loggedInUser) {
            this.loggedInUser.deposit(amount);
        }
    }
    //The withdraw method. subtracts amount to the logged in user balance
    withdraw(amount) {
        if (this.loggedInUser) {
            this.loggedInUser.withdraw(amount);
        }
    }
}
