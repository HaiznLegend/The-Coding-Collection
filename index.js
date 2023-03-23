// document.getElementById("count-el").innerText = 5

//change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let prev = count + " - "
    saveEl.textContent += prev
    count = 0
    countEl.textContent = count
}
function reset() {
    saveEl.textContent = "Previous entries: "
    count = 0
    countEl.textContent = count
}