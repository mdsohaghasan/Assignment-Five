document.getElementById('calculation').addEventListener('click', function () {
    // income field
    const incomeField = document.getElementById('income');
    const totalIncome = incomeField.value;

    // food field
    const foodField = document.getElementById('food');
    const foodData = foodField.value;


    // rent field
    const rentField = document.getElementById('rent');
    const rentData = rentField.value;

    // cloth field
    const clothField = document.getElementById('cloth');
    const clothData = clothField.value;

    // food and cloth  and rent field sum
    const totalExpense = parseFloat(foodData) + parseFloat(rentData) + parseFloat(clothData);
    // minus total-income to total-expanse
    const totalBalance = totalIncome - totalExpense;

    // show all value
    const showTotalExpense = document.getElementById('expense');
    showTotalExpense.innerText = totalExpense;

    const showTotalBalance = document.getElementById('balance');
    showTotalBalance.innerText = totalBalance;


});