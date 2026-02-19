document.getElementById("login_btn")
    .addEventListener("click", () => {
        const mobileNumber = document.getElementById("mobile_number").value;
        const inpPin = document.getElementById("inp_pin").value;
        if(mobileNumber === "01010101" && inpPin === "1111"){
            window.location.assign("./home.html")
        }
        else{
            alert("Invalid Pin")
            return
        }
    });