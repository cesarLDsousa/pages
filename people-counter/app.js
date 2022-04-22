let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

function save() {
    let savedCount = count + " - "
    saveEl.textContent += savedCount
}