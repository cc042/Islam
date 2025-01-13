const screen_condition = document.querySelector(".screen_condition")
const ScreenClose = document.querySelector(".sidebarclose")
const sidebar = document.querySelector(".sidebar")

function ResponsiveSideBar() {
    if (innerWidth < 587) {
        screen_condition.addEventListener("click", () => {
            sidebar.setAttribute("aria-opened", true)
        })
        ScreenClose.addEventListener("click", () => {
            sidebar.setAttribute("aria-opened", false)
        })
    }
    else {
        sidebar.setAttribute("aria-opened", false)
    }
}


ResponsiveSideBar()
window.addEventListener("resize", ResponsiveSideBar)