const filterDialog = document.querySelector(".filter")
const filterCloser = document.querySelector(".filterclose")
const filterOpener = document.querySelector(".filtersearch")

filterOpener.addEventListener("click", () => {
    filterDialog.showModal()
})

filterCloser.addEventListener("click", () => {
    filterDialog.close()
})