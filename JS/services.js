// follows
const FollowMe = document.querySelectorAll(".FollowMe")
const follow_dialog = document.querySelector(".Follows")
const Follows_exit = document.querySelector(".Followsclose")

FollowMe.forEach(follow => {
    follow.addEventListener("click", () => {
        follow_dialog.showModal()
    })
})

Follows_exit.addEventListener("click", () => {
    follow_dialog.close()
})

// Call Us
const callus = document.querySelector(".callus")
const contacts = document.querySelectorAll(".contact")
const callusclose = document.querySelector(".callusclose")

contacts.forEach((contact) => { contact.addEventListener("click", () => { callus.showModal() }) })
callusclose.addEventListener("click", () => { callus.close() })

// Estefsar
