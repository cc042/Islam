const screen_condition = document.querySelector(".screen_condition")
const ScreenClose = document.querySelector(".sidebarclose")
const sidebar = document.querySelector(".sidebar")

function closeSideBar() {
    sidebar.setAttribute("aria-opened", false)
}

function ResponsiveSideBar() {
    if (innerWidth < 440) {
        screen_condition.addEventListener("click", () => {
            sidebar.setAttribute("aria-opened", true)
        })

        ScreenClose.addEventListener("click", () => {
            closeSideBar()
        })
    }
    else {
        closeSideBar()
    }
}

ResponsiveSideBar()
window.addEventListener("resize", () => { ResponsiveSideBar(); gridResposive(SurahsWrapper) })

// Surahs Grid Show
function gridResposive(wrapper) {
    var width = innerWidth

    if (width > 950) {
        wrapper.style.gridTemplateColumns = "repeat(3, 1fr)"
    }
    else if (width <= 950 && width >= 800) {
        wrapper.style.gridTemplateColumns = "repeat(2, 1fr)"
    }
    else if (width <= 800) {
        wrapper.style.gridTemplateColumns = "repeat(1, 1fr)"
    }
}