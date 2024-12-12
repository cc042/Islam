// DOM
const text = document.querySelector("#counter_azkar")
const adder = document.querySelector(".counter_azkar")

// Numbers
var counter = 0

// texts
var text1 = "عداد التسبيح"

// functions
adder.addEventListener("click", () => {
    counter += 1
    text.textContent = text1 + " " + counter;
})