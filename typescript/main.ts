//main typescript file: for importing /bank & /user
import { Bank } from "./bank";
import { User } from "./user";

const myBank = new Bank(); //Creating a new instance for a new bank
const user = new User("test", "test")

const inputUsername = "test";
const inputPassword = "test";
myBank.login(inputUsername, inputPassword);
    if (user.login(inputUsername, inputPassword)) {
        console.log("You have logged in!")
    } else {
        console.log("Wrong log-in credentials. Check and try again");
    }