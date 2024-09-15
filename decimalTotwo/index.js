const binary = document.querySelector(".user-binary > input")
const decimal = document.querySelector(".user-deci > input")

const userNumber = document.querySelector('.user-number > input')

const btn = document.querySelector(".user-btn")

const res = document.querySelector(".num")



btn.addEventListener("click", e => {
    e.preventDefault()
    if(!isFinite(+userNumber.value)) {
        userNumber.classList.add("err")
    } else {
        userNumber.classList.remove("err")
    }
    binaryFunction(binary.value)
    decimalFunction(decimal.value)
    res.innerHTML = `<div>${solve(+userNumber.value)}</div>`
})


const binaryFunction = (num) => {
    if(+num !== 2) {
        binary.classList.add("err")
    } else {
        binary.classList.remove("err")
    }
}

const decimalFunction = (num) => {
    if(+num !== 10) {
        decimal.classList.add("err")
    } else {
        decimal.classList.remove("err")
    }
}

const solve = (num) => {
    let res = 0
    let numtoStr = num + ""
    if(isFinite(num)) {
        for(let i = 0; i < numtoStr.length; i++) {
            console.log(numtoStr[i])
            res = res * 2 + +numtoStr[i] 
            console.log(res)
        }
    }
    return res
}