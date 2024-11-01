//Importing bank and user.js to main
import { Bank } from "./bank.js";
import { User } from "./user.js";

//New instance of a bank
const myBank = new Bank();

//HTML ELEMENT VARIABLES
const logInBox = document.getElementById("logInBox") as HTMLDivElement;
const bankMenuBox = document.getElementById("bankMenuBox") as HTMLDivElement;
const logInBtn = document.getElementById("logInBtn") as HTMLDivElement;
const checkBalanceBtn = document.getElementById("checkBalanceBtn") as HTMLDivElement;
const depositBtn = document.getElementById("depositBtn") as HTMLDivElement;
const withdrawBtn = document.getElementById("withdrawBtn") as HTMLDivElement;
const logOutBtn = document.getElementById("logOutBtn") as HTMLDivElement;
const balanceBox = document.getElementById("balanceBox") as HTMLDivElement;
const welcomeText = document.getElementById("welcomeText") as HTMLHeadingElement;

//FOR HTML INPUT BOX
const inputBox = document.getElementById("inputBox") as HTMLDivElement;
const inputMsg = document.getElementById("inputMsg") as HTMLParagraphElement;
const amountInput = document.getElementById("amountInput") as HTMLInputElement;
const confirmBtn = document.getElementById("confirmBtn") as HTMLButtonElement;
const cancelBtn = document.getElementById("cancelBtn") as HTMLButtonElement;
const messageBox = document.getElementById("messageBox") as HTMLDivElement;

//LOG IN FUNCTIONALITY
logInBtn.addEventListener("click", () => {
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (myBank.login(username, password)) {
        logInBox.style.display = "none";
        bankMenuBox.style.display = "block";
        welcomeText.style.display = "none";
    } else {
        displayError("You have entered the wrong log-in credentials. Please try again.");
    }
});

//LOG OUT FUNCTIONALITY
logOutBtn.addEventListener("click", () => {
    myBank.logout();
    logInBox.style.display = "block";
    bankMenuBox.style.display = "none";
    welcomeText.style.display = "block";
});

//FUNCTION FOR ERROR MSG
function displayError(message: string) {
    if (messageBox) {
        messageBox.innerHTML = message;
        messageBox.style.color ="red";
        messageBox.style.display = "block";

        setTimeout(() => {
        messageBox.innerHTML = "";
        messageBox.style.display = "none"; 
        }, 5000);
    }  
}

//FUNCTION FOR SUCCESS MSG
function displayMessage(message: string) {
    if (messageBox) {
        messageBox.innerHTML = message;
        messageBox.style.color = "green";
        messageBox.style.display = "block";

        setTimeout(() => {
            messageBox.innerHTML = "";
            messageBox.style.display = "none"; 
        }, 5000);
    }
}

//Function for balance displaY
function updateBalanceDisplay () {
    const balance = myBank.getBalance ();
    if (balance !== null) {
        balanceBox.innerHTML ="Your current balance is " + balance + " kr";
        balanceBox.style.display = "block";
    } else {
        balanceBox.innerHTML = "No user is logged in";
        balanceBox.style.display = "none";
    }
}

//DEPOSIT FUNCTIONALITY
depositBtn.addEventListener("click", () => {
    inputBox.style.display = "block";
    inputMsg.textContent = "Enter amount to deposit:";

    confirmBtn.onclick = () => {
        const amount = parseFloat(amountInput.value);
        
        if (!isNaN(amount) && amount > 0) {
            myBank.deposit(amount);
            displayMessage("Deposit successful."); 
            inputBox.style.display = "none";
            amountInput.value = "";
        } else {
            displayError("The deposit is an invalid amount!"); // Error handling
        }
    };
});


//WITHDRAW FUNCTIONALITY
withdrawBtn.addEventListener("click", () => {
    inputBox.style.display = "block";
    inputMsg.textContent = "Enter amount to withdraw:";

    confirmBtn.onclick = () => {
        const amount = parseFloat(amountInput.value);
        const balance = myBank.getBalance();

        if (!isNaN(amount) && amount > 0) {
            if (balance !== null) {
                if (amount <= balance) {
                    myBank.withdraw(amount);
                    displayMessage("Withdrawal successful.");
                    inputBox.style.display = "none";
                    amountInput.value = "";
                } else {
                    displayError("Not enough money to withdraw.");
                }
            } 
        } else {
            displayError("Invalid amount!");
        }
    };
});

// CANCEL BUTTON FUNCTIONALITY
cancelBtn.addEventListener("click", () => {
    inputBox.style.display = "none";
    amountInput.value = "";
});

// CHECK/HIDE BALANCE FUNCTIONALITY
checkBalanceBtn.addEventListener("click", () => {
    if (balanceBox.style.display === "none" || balanceBox.style.display === "") {
        const balance = myBank.getBalance();
        if (balance !== null) {
            balanceBox.innerHTML ="Your current balance is " + balance + " kr";
        } else {
            balanceBox.innerHTML ="No user is logged in";
        }
        //SHOW BALANCE
        balanceBox.style.display = "block";
        checkBalanceBtn.textContent = "Hide balance";
    } else {
        //HIDE BALANCE
        balanceBox.style.display = "none";
        checkBalanceBtn.textContent = "View balance";
    }   
});