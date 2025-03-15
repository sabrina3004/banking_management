document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = depositInput.value
    const deposit = parseInt(depositInputValue)
    //Get deposit
    const depositInputeTotalField = document.getElementById("deposit-total");
    const depositTotal =  parseInt(depositInputeTotalField.innerText)
    const newDeposit  = depositTotal + deposit
    depositInputeTotalField.innerText = newDeposit
    // balance update
    const totalBalanceField = document.getElementById("balace-total")
    const totalBalanceAmount = parseInt(totalBalanceField.innerText)
    const newBalance = totalBalanceAmount + deposit
    totalBalanceField.innerText = newBalance 
    depositInput.value = ""
  });
