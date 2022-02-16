document.getElementById('calculation').addEventListener('click', function () {

    // income field
    const incomeData = ammount('income');

    // food field
    const foodData = ammount('food');

    // rent field
    const rentData = ammount('rent');

    // cloth field
    const clothData = ammount('cloth');

    // account calculation
    const totalExpense = parseFloat(foodData) + parseFloat(rentData) + parseFloat(clothData)

    const totalBalance = incomeData - totalExpense;


    //set total ammount result
    const setTotalExpense = document.getElementById('expense');
    setTotalExpense.innerText = totalExpense;

    const setTotalBalance = document.getElementById('balance');
    setTotalBalance.innerText = totalBalance;

});

// input function 
function ammount(inputId) {
    const ammountField = document.getElementById(inputId);
    const totalIncome = ammountField.value;
    ammountField.value = '';
    return totalIncome;
}

