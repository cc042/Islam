const switcher = document.querySelectorAll(".darkmode")
let darkmode = localStorage.getItem("darked")

switcher.forEach((element) => {
    element.addEventListener("click", () => {
        darkmode = localStorage.getItem("darked")
        darkmode !== "true" ? DarkModeApply() : DarkModeDelete()
    })
})

function DarkModeApply() {
    localStorage.setItem("darked", "true")
    document.body.classList.add("dark-mode")
}

function DarkModeDelete() {
    localStorage.setItem("darked", "false")
    document.body.classList.remove("dark-mode")
}

if (darkmode === "true") DarkModeApply()
if (localStorage.getItem("darked") === "true") {
    DarkModeApply()
}
else {
    DarkModeDelete()
}