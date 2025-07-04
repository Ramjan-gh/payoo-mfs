document.getElementById('add-money').addEventListener('click', function(){
    const addMoneyContainer = document.getElementById('add-money-container');
    addMoneyContainer.classList.remove('hidden');
})
document.getElementById('add-money-btn').addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = document.getElementById("add-money-input").value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('pin').value;
        if(pinNumber === '227'){
            const balance = document.getElementById('current-balance').innerText;
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber + addMoneyNumber;
            console.log('Adding TK', addMoneyNumber,'to your account...\nYour new balance is',newBalance);
            const updatedBalance = (document.getElementById(
              "current-balance"
            ).innerText = newBalance);
        }
        
        else{
            alert('Wrong Pin');
            console.log('Wrong Pin');
        }
})