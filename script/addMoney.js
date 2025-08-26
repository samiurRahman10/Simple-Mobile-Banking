const actualPin = 1234;
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
})
// Log Out Feature
document.getElementById('logOut').addEventListener('click', function () {
    window.location.href = "./index.html";
})

// Toggle Feature
document.getElementById('add-money-card').addEventListener('click', function () {
    toggle('money-add-form');
})

document.getElementById('withdraw-money-card').addEventListener('click', function () {
    toggle('money-withdraw-form');
})

document.getElementById('transfer-money-card').addEventListener('click', function () {
    toggle('money-transfer-form')
})