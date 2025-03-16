addEventListener("DOMContentLoaded", () => { document.querySelector(".Load").close() })
document.addEventListener('contextmenu', (e) => { e.preventDefault() });
document.addEventListener("dblclick", e => { e.preventDefault(); return false })
document.onkeydown = function (e) { if (event.keyCode == 123) return false; if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false; if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) return false; if (e.ctrlKey && e.key == "C".charCodeAt(0)) return false; if (e.ctrlKey && e.key == "X".charCodeAt(0)) return false; if (e.key == "Escape") return false; }

// Projects
const ProjectsWrapper = document.querySelector(".Projects")
const projects = [
    { NAME: "Portfolio", LINK: "https://cc042.github.io/Portfolio", DESCRIPTION: "موقع تعريفى" },
    { NAME: "Todo List", LINK: "https://cc042.github.io/TodoList", DESCRIPTION: "خطط للمستقبل" },
    { NAME: "Weather", LINK: "https://cc042.github.io/Weather", DESCRIPTION: "ابحث عن الطقس فى اى وقت و فى اى مكان" },
    { NAME: "ECHO-AI", LINK: "https://cc042.github.io/Echo-AI", DESCRIPTION: "تجريبى" },
    { NAME: "Weight", LINK: "https://cc042.github.io/Weight", DESCRIPTION: "ادخل وزنك على اى كوكب من كواكب المجموعة الشمسية" },
]
for (let i = 0; i < projects.length; i++) { ProjectsWrapper.innerHTML += `<div class="project"><h1>الأسم: ${projects[i].NAME}</h1><p>الرابط: <a target="_blank" href='${projects[i].LINK}'>أضغط هنا</a></p><p>الوصف: ${projects[i].DESCRIPTION}</p></div>` }

// Azkar
const text = document.querySelector("#counter_azkar")
const adder = document.querySelector(".counter_azkar")
const saved_azkar = document.querySelector("#saved_azkar")

var counter1 = 0
var counter2 = 0 || localStorage.getItem("counter")
var text1 = "عدد التسابيح: "
var text2 = "أخر تسجيل: "

function add() {
    counter1 = counter1
    counter1 += 1
    text.textContent = text1 + padzero(counter1);
    counter2 = counter1
    localStorage.setItem("counter", counter2)
    saved_azkar.innerHTML = text2 + localStorage.getItem("counter")
}

function Delete() {
    localStorage.removeItem("counter")
    saved_azkar.innerHTML = text2 + ": " + 0
}

saved_azkar.innerHTML = localStorage.getItem("counter") > 0 ? text2 + localStorage.getItem("counter") : text2 + 0

// Event Listeners
adder.addEventListener("click", add)
saved_azkar.addEventListener("click", Delete)

// Times
const timeshow = document.querySelector(".timeshow")
setInterval(() => {
    timeshow.innerHTML = new Intl.DateTimeFormat('ar-Fr-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(Date.now()).split()
}, 1000);

// scrolling
const scrollup = document.querySelector(".scrollup")
const intial = 0
const final = screen.height
scrollup.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: 'smooth' }); })
addEventListener("scrollend", () => {
    var ScrollNow = final - scrollY
    console.log(ScrollNow)
    //               10   -    1     = 9
    //               10   -    4     = 6
    //               10   -    6     = 4
    //               10   -    7     = 3
    //               10   -    10    = 0
    if (scrollY < ScrollNow) {
        scrollup.style.animation = "fade 1s ease"
        scrollup.style.opacity = "1"
        scrollup.addEventListener("animationend", () => { scrollup.style.animation = "" })
    }
    if (ScrollNow > scrollY) {
        scrollup.style.animation = "fadeout 1s ease"
        scrollup.addEventListener("animationend", () => { scrollup.style.animation = "" })
    }
    if (scrollY == ScrollNow) {
        // scrollup.style.animation = "fadeout 1s ease"
        scrollup.addEventListener("animationend", () => { scrollup.style.animation = "" })
    }
})


function validateArabicInput(event) {
    const inputValue = event.target.value;
    const arabicRegex = /^[\u0600-\u06FF\s]/; // Regex for Arabic letters and spaces

    if (!arabicRegex.test(inputValue)) {
        event.target.setCustomValidity('يُسمح فقط بالأحرف العربية والمسافات.'); // Set custom validation message
    } else {
        event.target.setCustomValidity(''); // Clear custom validation message
    }
}

function padzero(unit) {
    unit = String(unit)
    if (unit.length <= 3) return unit
    return unit.length < 2 ? `00${unit}` : `0${unit}`
}

// alert Messages
const alert1 = document.querySelector(".alert1")
const alertText = document.querySelector(".alert1text")
const alertHeaderText = document.querySelector(".alertheader")

function findoff(msg = String, header = String) {
    alert1.showModal();
    alertText.innerHTML = `${msg}`
    alertHeaderText.innerHTML = `${header}`
}

// theme Switcher 
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
if (localStorage.getItem("darked") === "true") { DarkModeApply() }
else { DarkModeDelete() }