let resultHome = document.getElementById("number-home")
let resultGuest = document.getElementById("number-guest")



function plus1home() {
    let currentValue = parseInt(resultHome.textContent)
    resultHome.textContent = currentValue + 1
}

function plus2home() {
    let currentValue = parseInt(resultHome.textContent)
    resultHome.textContent = currentValue + 2
}

function plus3home() {
    let currentValue = parseInt(resultHome.textContent)
    resultHome.textContent = currentValue + 3
}

function plus1guest() {
    let currentValue = parseInt(resultGuest.textContent)
    resultGuest.textContent = currentValue + 1
}

function plus2guest() {
    let currentValue = parseInt(resultGuest.textContent)
    resultGuest.textContent = currentValue + 2
}

function plus3guest() {
    let currentValue = parseInt(resultGuest.textContent)
    resultGuest.textContent = currentValue + 3
}