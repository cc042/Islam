// filter
const filter = document.querySelector(".filter")
const filteropen = document.querySelector(".filtersearch")
const filterclose = document.querySelector(".filterclose")
const filterwl = document.querySelector("#byletter")
const filterwn = document.querySelector("#byname")

// filter settings
filteropen.addEventListener("click", () => { filter.showModal() })
filterclose.addEventListener("click", () => { filter.close() })

addEventListener("change", () => {
    if (filterwl.checked) {
        findersurah.addEventListener("submit", e => { e.preventDefault(); findsurahwithletter() })
        console.log("it`s Letters");
    }
    if (filterwn.checked) {
        findersurah.addEventListener("submit", e => { e.preventDefault(); FindSurahwithName() })
        console.log("it`s Words");
    }
})