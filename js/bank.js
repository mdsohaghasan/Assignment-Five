document.getElementById('calculation').addEventListener('click', function () {

    // income field
    const incomeData = amount('income');


    // food field
    const foodData = amount('food');

    // rent field
    const rentData = amount('rent');

    // cloth field
    const clothData = amount('cloth');

    // account calculation
    const totalExpense = parseFloat(foodData) + parseFloat(rentData) + parseFloat(clothData)

    const totalBalance = incomeData - totalExpense;


    //set total amount result
    const setTotalExpense = document.getElementById('expense');
    setTotalExpense.innerText = totalExpense;

    if (incomeData > totalExpense && incomeData > 0) {
        const setTotalBalance = document.getElementById('balance');
        setTotalBalance.innerText = totalBalance;
    } else {
        const errorMsgAleart = document.getElementById('errorMsg')
        errorMsgAleart.innerText = 'your costs more than your balance';
    }

});

// input function 
function amount(inputId) {
    const amountField = document.getElementById(inputId);
    const amountNumber = amountField.value;
    amountField.value = '';
    return amountNumber;
}
