const elForm = document.querySelector(".js__form")
const elInput = document.querySelector(".js__input")
const elbtn = document.querySelector(".js__form")
const elResult = document.querySelector(".js__result")

function check(num){

if (num % 3 == 0 && num % 5 == 0){
    return "FizzBuzz"
}
if (num % 3 == 0){
    return "Fizz"
}
if (num % 5 == 0){
    return "Buzz"
}
else{
    return "Togri yozing ustoz🙄"
}
}
function HandelEventFunction(event){
    event.preventDefault()
    let elInputVal = +elInput.value.trim()
    elResult.textContent = check(elInputVal)
    if (elInputVal <= 0 || isNaN(elInputVal)){
        elResult.textContent = "0 dan kottaroq son kiriting! Yoki son kiriting"
        elResult.classList.remove("result-remove")
        elResult.classList.add("result-error")
        elInput.classList.remove("is-valid")
        elInput.classList.add("is-invalid")
        return;
    }
    else{
        elResult.classList.remove("result-error")
        elResult.classList.add("result-remove")
        elInput.classList.remove("is-invalid")
        elInput.classList.add("is-valid")
    }
}

elForm.addEventListener("submit", HandelEventFunction);