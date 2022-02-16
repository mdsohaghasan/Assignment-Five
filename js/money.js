document.getElementById('calculation').addEventListener('click', function () {
    // income field
    const incomeField = document.getElementById('income');
    const totalIncome = incomeField.value;

    // food field
    const foodField = document.getElementById('food');
    const foodData = foodField.value;
    console.log(foodData);

    // rent field
    const rentField = document.getElementById('rent');
    const rentData = rentField.value;
    console.log(rentData);
    // cloth field
    const clothField = document.getElementById('cloth');
    const clothData = clothField.value;
    console.log(clothData);
    const totalExpense = foodData + rentData + clothData;

    console.log(totalExpense);

    const totalBalance = totalIncome - totalExpense;
    console.log(totalBalance);

    // show

    const ex = document.getElementById('expense');
    ex.innerText = totalExpense;

    const bls = document.getElementById('balance');
    bls.innerText = totalBalance;


});