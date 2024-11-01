//Importing bank and user.js to main
import { Bank } from "./bank.js";
//New instance of a bank
const myBank = new Bank();
//HTML ELEMENT VARIABLES
const logInBox = document.getElementById("logInBox");
const bankMenuBox = document.getElementById("bankMenuBox");
const logInBtn = document.getElementById("logInBtn");
const checkBalanceBtn = document.getElementById("checkBalanceBtn");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const logOutBtn = document.getElementById("logOutBtn");
const balanceBox = document.getElementById("balanceBox");
const welcomeText = document.getElementById("welcomeText");
//FOR HTML INPUT BOX
const inputBox = document.getElementById("inputBox");
const inputMsg = document.getElementById("inputMsg");
const amountInput = document.getElementById("amountInput");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const messageBox = document.getElementById("messageBox");
//LOG IN FUNCTIONALITY
logInBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (myBank.login(username, password)) {
        logInBox.style.display = "none";
        bankMenuBox.style.display = "block";
        welcomeText.style.display = "none";
    }
    else {
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
function displayError(message) {
    if (messageBox) {
        messageBox.innerHTML = message;
        messageBox.style.color = "red";
        messageBox.style.display = "block";
        setTimeout(() => {
            messageBox.innerHTML = "";
            messageBox.style.display = "none";
        }, 5000);
    }
}
//FUNCTION FOR SUCCESS MSG
function displayMessage(message) {
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
function updateBalanceDisplay() {
    const balance = myBank.getBalance();
    if (balance !== null) {
        balanceBox.innerHTML = "Your current balance is " + balance + " kr";
        balanceBox.style.display = "block";
    }
    else {
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
        }
        else {
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
                }
                else {
                    displayError("Not enough money to withdraw.");
                }
            }
        }
        else {
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
            balanceBox.innerHTML = "Your current balance is " + balance + " kr";
        }
        else {
            balanceBox.innerHTML = "No user is logged in";
        }
        //SHOW BALANCE
        balanceBox.style.display = "block";
        checkBalanceBtn.textContent = "Hide balance";
    }
    else {
        //HIDE BALANCE
        balanceBox.style.display = "none";
        checkBalanceBtn.textContent = "View balance";
    }
});
