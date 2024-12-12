// DOM
const text = document.querySelector("#counter_azkar")
const adder = document.querySelector(".counter_azkar")
const saved_azkar = document.querySelector("#saved_azkar")

// Numbers
var counter1 = -1
var counter2 = 0

// texts
var text1 = "عداد التسبيح"
var text2 = "أخر تسجيل"

// functions
function add() {
    counter1 += 1
    text.textContent = text1 + " " + counter1;
    counter2 = counter1
    localStorage.setItem("counter", counter2)
}

function Delete() {
    localStorage.removeItem("counter")
    saved_azkar.innerHTML = text2 + ": " + 0
}

// set texting
saved_azkar.innerHTML = localStorage.getItem("counter") > 0 ? text2 + ": " + localStorage.getItem("counter") : text2 + ": " + 0



// Event Listeners
adder.addEventListener("click", add)
saved_azkar.addEventListener("click", Delete)