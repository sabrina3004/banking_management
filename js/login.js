const  submit = document.getElementById("submit-buttton").addEventListener("click",function(){
// Email
    const email = document.getElementById("user-email").value
// Password
    const password = document.getElementById("user-password").value
    
    // Add
    if(email !== "admin123@gmail.com" && password !== "1234567"){
       alert("Invalid emain or password")
       return
    }
    if(email == "admin123@gmail.com" && password == "1234567"){
        window.location.href = "../banking.html"
    }
})