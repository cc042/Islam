// follows
const FollowMe = document.querySelectorAll(".FollowMe")
const follow_dialog = document.querySelector(".Follows")
const Follows_exit = document.querySelector(".Followsclose")
FollowMe.forEach(follow => { follow.addEventListener("click", () => { follow_dialog.showModal() }) })
Follows_exit.addEventListener("click", () => { follow_dialog.close() })

// Call Us
const callus = document.querySelector(".callus")
const contacts = document.querySelectorAll(".contact")
const callusclose = document.querySelector(".callusclose")
contacts.forEach((contact) => { contact.addEventListener("click", () => { callus.showModal() }) })
callusclose.addEventListener("click", () => { callus.close() })

// Estefsar
const Estefsar = document.querySelector(".Estefsar")
const EstefsarForm = document.querySelector(".estefsarform")
const closeEstefsar = document.querySelectorAll(".closeEstefsar")
const openEstefsar = document.querySelectorAll(".estefsar")
const estefsartext = document.querySelector(".estefsartext")
const estefsarname = document.querySelector(".estefsarname")

EstefsarForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = estefsartext.value
    const name = estefsarname.value
    const phoneNumber = '+201225073533';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=مرحبا انا اسمى ${name}%0A اريد الاسفسار عن: ${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
})


openEstefsar.forEach(element => { element.addEventListener("click", () => { Estefsar.showModal() }) })
closeEstefsar.forEach(element => { element.addEventListener("click", () => { Estefsar.close() }) })