// Add Money Functionalities
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const actualPin = 1234;
    const bankName = document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('bank-account-number').value;
    const addMoneyAmount = parseInt(document.getElementById('add-money-amount').value);
    const addPin = parseInt(document.getElementById('add-pin').value);
    if (accountNumber.length < 11 || actualPin !== addPin) {
        alert("Invalid Account Number or Pin");
        return;
    }
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const totalBalance = availableBalance + addMoneyAmount;
    document.getElementById('available-balance').innerText = totalBalance;
})

// Cash Out Functionalities 
document.getElementById('Withdraw-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const actualPin = 1234;
    const cashOutBankAccountNumber = document.getElementById('cash-out-bank-account-number').value;
    const withdrawMoney = parseInt(document.getElementById('Withdraw-money-amount').value);
    const withdrawPin = parseInt(document.getElementById('Withdraw-pin').value);
    if (cashOutBankAccountNumber.length < 11 || actualPin !== withdrawPin) {
        alert("Invalid Account Number or Pin");
        return;
    }
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    if (availableBalance >= withdrawMoney) {
        const newTotalMoney = availableBalance - withdrawMoney;
        document.getElementById('available-balance').innerText = newTotalMoney;
    }
    else {
        alert('Insufficient Balance');
    }

})

// Log Out Feature
document.getElementById('logOut').addEventListener('click', function () {

    window.location.href="./index.html";
})

// Toggle Feature
document.getElementById('add-money-card').addEventListener('click', function () {
    document.getElementById('money-add-form').style.display = 'block';
    document.getElementById('money-withdraw-form').style.display = 'none'
})

document.getElementById('withdraw-money-card').addEventListener('click', function () {
    document.getElementById('money-withdraw-form').style.display = 'block'
    document.getElementById('money-add-form').style.display = 'none';
})