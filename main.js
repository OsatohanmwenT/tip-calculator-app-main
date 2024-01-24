const tipInput = document.getElementById("Tip")
const form = document.getElementById("cal")
const peopleInput = document.getElementById("people")
let tipAmountEl = document.getElementById("tipAmount")
const button = document.querySelectorAll("button")
const customInput = document.getElementById("custom")
let totalEl = document.getElementById("total")
const resetBtn = document.getElementById("resetBtn")

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", () => {
        calculate(tipInput.value,peopleInput.value,button[i].value)
    })
}
resetBtn.addEventListener("click", () => {
    reset()
})
function calculate(amount,people,percentage){
    if (people === "" || 0){
        people = 1
        const tipValue = amount*percentage/people
        const round = tipValue.toFixed(2)
        tipAmountEl.innerHTML = `$${round}`

        const totalValue = (amount/people) + tipValue
        const roundT = totalValue.toFixed(2)
        totalEl.innerHTML = `$${roundT}`
    }else{
    const tipValue = amount*percentage/people
        const round = tipValue.toFixed(2)
        tipAmountEl.innerHTML = `$${round}`

        const totalValue = (amount/people) + tipValue
        const roundT = totalValue.toFixed(2)
        totalEl.innerHTML = `$${roundT}`
}
customInput.addEventListener("keyup", () => {
    calculateCustom(tipInput.value,peopleInput.value,customInput.value)

})
function calculateCustom(amount,people,percentage){
    if (people === "" || 0){
        people = 1
        const tipValue = amount*(percentage/100)/people
        const customRound = tipValue.toFixed(2)
        tipAmountEl.innerHTML = `$${customRound}`

        const totalValue = (amount/people) + tipValue
        const customTotal = totalValue.toFixed(2)
        totalEl.innerHTML = `$${customTotal}`
    }else{
        const tipValue = amount*(percentage/100)/people
        const customRound = tipValue.toFixed(2)
        tipAmountEl.innerHTML = `$${customRound}`

        const totalValue = (amount/people) + tipValue
        const customTotal = totalValue.toFixed(2)
        totalEl.innerHTML = `$${customTotal}`
}
}
function reset() {
    tipAmountEl.innerHTML = "$0.00"
    totalEl.innerHTML = "$0.00"
    tipInput.value = ""
    peopleInput.value = ""
}
