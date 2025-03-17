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

    // input field clear
    depositInput.value = ""

  });
  // withdraw button

  document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInputField =  document.getElementById("withdraw-input")
    const withdrawInputValue = parseInt(withdrawInputField.value)
   
    const withdrawInputTotalField =  document.getElementById("withdraw-total");
    const withdrawTotalValue = parseInt(withdrawInputTotalField.innerText)
    const withdraw = withdrawInputValue + withdrawTotalValue
    withdrawInputTotalField.innerText = withdraw
    
     // balance update = update withdraw amount
     const totalBalanceField = document.getElementById("balace-total")
     const totalBalanceAmount = parseInt(totalBalanceField.innerText)
     const newBalance = totalBalanceAmount - withdrawInputValue
     totalBalanceField.innerText = newBalance

      // clear input field
      withdrawInputField.value = ""
  })
