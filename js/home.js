// console.log('home.js added');

// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('add money btn clicked');
const addMoneyInput = document.getElementById("add-money-input");  
console.log(addMoneyInput.value);
const pinNumber = document.getElementById('pin');
console.log(pinNumber.value);  
if(pinNumber.value === '227'){
    console.log('Adding TK',addMoneyInput.value,'to your account...');
    const currentBalance = document.getElementById('current-balance');
    // console.log(currentBalance.innerText);
    const addMoneyInputNumber = parseFloat(addMoneyInput.value);
    console.log(addMoneyInputNumber);
    const currentBalanceNumber = parseFloat(currentBalance.innerText);
    console.log(currentBalanceNumber);
    const newBalance = currentBalanceNumber + addMoneyInputNumber;
    console.log(newBalance);

    document.getElementById('current-balance').innerText = newBalance;
}
else{
    alert("Wrong Pin");
    console.log('Wrong pin')
}
});
