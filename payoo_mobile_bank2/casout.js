document.getElementById("cashout_btn").addEventListener("click", () => {
    const currentAmount = document.getElementById("current_amount");
    const agentNumber = document.getElementById("agent_number").value;
    const amount = document.getElementById("amount").value;
    const inpPin = document.getElementById("inp_pin").value;
    if (agentNumber === "11111111111" && currentAmount >= amount && inpPin === '1111'){
        currentAmount -= amount;
    }
        console.log(agentNumber, amount, inpPin);

})