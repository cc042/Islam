const screen_tabs = document.querySelector(".screen_tabs")
const screen_condition = document.querySelector(".screen_condition")
const ScreenClose = document.querySelector(".ScreenClose")

screen_condition.addEventListener("click", () => {
    screen_tabs.setAttribute("data-opened", true)
    screen_tabs.style.display = "inline"
})

ScreenClose.addEventListener("click", () => {
    screen_tabs.setAttribute("data-opened", false)
    setTimeout(() => { screen_tabs.style.display = "none" }, 900)
})

function resize() {
    const width = window.innerWidth
    if (width >= 587) {
        screen_tabs.style.display = "none"
        screen_tabs.setAttribute("data-opened", false)
    }
}

resize()
window.addEventListener("resize", resize)