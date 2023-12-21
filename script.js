document.addEventListener("DOMContentLoaded", ()=>{
    let error = document.querySelector("#error");
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value
    if(password !== confirmPassword){
        error.innerHTML = "passwords do not match";         
    }
    if(password == "" && confirmPassword == ""){
        error.innerHTML = "*passwords do not match";         
    }
})