const actualPin = 1234;
const transactionData = [];
// Function for get input number
function getInputNumber(id) {
    return parseInt(document.getElementById(id).value);
}

// Function for get input value
function getInputValue(id) {
    return document.getElementById(id).value;
}

// Function to get inner text
function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText);
}

// Function Set InnerText
function setInnerText(value) {
    document.getElementById('available-balance').innerText = value;
}

//Function for Toggle
function toggle(id) {
    const forms = document.getElementsByClassName('forms');
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}
// Function for toggle style
function toggle2(id) {
    const cardBtns = document.getElementsByClassName('card-btn');
    for (const cardBtn of cardBtns) {
        cardBtn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        cardBtn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}
// Add Money Functionalities
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bankName = getInputValue('bank-name');
    const accountNumber = getInputValue('bank-account-number');
    const addMoneyAmount = getInputNumber('add-money-amount');
    const addPin = getInputNumber('add-pin');

    if (accountNumber.length < 11 || actualPin !== addPin) {
        alert("Invalid Account Number or Pin");
        return;
    }
    const availableBalance = getInnerText('available-balance');
    const totalBalance = availableBalance + addMoneyAmount;
    setInnerText(totalBalance);

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})

// Cash Out Functionalities 
document.getElementById('Withdraw-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const cashOutBankAccountNumber = getInputValue('cash-out-bank-account-number');
    const withdrawMoney = getInputNumber('Withdraw-money-amount');
    const withdrawPin = getInputNumber('Withdraw-pin');
    if (cashOutBankAccountNumber.length < 11 || actualPin !== withdrawPin) {
        alert("Invalid Account Number or Pin");
        return;
    }
    const availableBalance = getInnerText('available-balance');
    if (availableBalance >= withdrawMoney) {
        const newTotalMoney = availableBalance - withdrawMoney;
        setInnerText(newTotalMoney);
    }
    else {
        alert('Insufficient Balance');
    }

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})

// Transfer Money functionalities
document.getElementById('transfer-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const accountNumber = getInputValue('transfer-bank-account-number');
    const amount = getInputNumber('transfer-money-amount');
    const pin = getInputNumber('transfer-pin');
    const availableBalance = getInnerText('available-balance');
    if (pin !== actualPin || accountNumber.length < 11) {
        alert("Invalid Account or Pin");
        return;
    }
    if (availableBalance < amount) {
        alert("Insufficient Balance");
        return;
    }
    else {
        const newTotalMoney = availableBalance - amount;
        setInnerText(newTotalMoney);
    }

    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})
// Transaction Feature
document.getElementById("transaction-money-card").addEventListener('click', function () {
    // Where To Add
    const parent = document.getElementById("transaction-money-content-container");
    parent.innerText= '';

    for (const data of transactionData) {
        // What to add
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="bg-white p-3 rounded-lg flex justify-between items-center mb-3">
                    <div class="flex items-center gap-3">
                        <div class="p-2 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#666768]">${data.date} </p>
                        </div>
                    </div>

                    <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>
               `
            // Add The child
               parent.appendChild(div);
    }
}
)
// Log Out Feature
document.getElementById('logOut').addEventListener('click', function () {
    window.location.href = "./index.html";
})

// Toggle Feature
document.getElementById('add-money-card').addEventListener('click', function () {
    toggle('money-add-form');
    toggle2('add-money-card');
})

document.getElementById('withdraw-money-card').addEventListener('click', function () {
    toggle('money-withdraw-form');
    toggle2('withdraw-money-card');
})

document.getElementById('transfer-money-card').addEventListener('click', function () {
    toggle('money-transfer-form');
    toggle2('transfer-money-card');
})

document.getElementById('transaction-money-card').addEventListener('click', function () {
    toggle('money-transaction-form');
})
