const details = document.querySelector(".NavScreen")

function switchTab(tabId, removablesection1, removablesection2, removablesection3, removablesection4, removablesection5) {
    document.getElementById(tabId).classList.add("active");
    document.getElementById(removablesection1).classList.remove("active");
    document.getElementById(removablesection2).classList.remove("active");
    document.getElementById(removablesection3).classList.remove("active");
    document.getElementById(removablesection4).classList.remove("active");
    document.getElementById(removablesection5).classList.remove("active");
    details.removeAttribute("open")
}

document.querySelectorAll("#tab1").forEach(element => {
    element.addEventListener("click", () => {
        switchTab("content1", "content2", "content3", "content4", "content5", "content6") // 1
    })
})

document.querySelectorAll("#tab2").forEach(element => {
    element.addEventListener("click", () => {
        switchTab("content2", "content1", "content3", "content4", "content5", "content6") // 2
    })
})

document.querySelectorAll("#tab3").forEach(element => {
    element.addEventListener("click", () => {
        switchTab("content3", "content1", "content2", "content4", "content5", "content6") // 3
    })
})

document.querySelectorAll("#tab4").forEach(element => {
    element.addEventListener("click", () => {
        switchTab("content4", "content1", "content2", "content3", "content5", "content6") // 4
    })
})

document.querySelectorAll("#tab5").forEach(element => {
    element.addEventListener("click", () => {
        switchTab("content5", "content1", "content2", "content3", "content4", "content6") // 5
    })
})

document.querySelectorAll("#tab6").forEach(element => {
    element.addEventListener("click", () => {
        switchTab("content6", "content1", "content2", "content3", "content4", "content5") // 6
    })
})

document.querySelectorAll("#tab1").forEach(i => {
    i.click()
})