window.onload = () => { document.querySelector(".Load").close() }
document.addEventListener('contextmenu', (e) => { e.preventDefault() });
document.addEventListener("dblclick", e => { e.preventDefault(); return false })
document.onkeydown = function (e) {
    if (event.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) return false;
    if (e.key == "Escape") return false;
}

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

// Numbers
var counter1 = 0
var counter2 = 0

// texts
var text1 = "عداد التسبيح"
var text2 = "أخر تسجيل"

// functions
function add() {
    counter1 += 1
    text.textContent = text1 + " " + counter1;
    counter2 = counter1
    localStorage.setItem("counter", counter2)
}

function Delete() {
    localStorage.removeItem("counter")
    saved_azkar.innerHTML = text2 + ": " + 0
}

// set texting
saved_azkar.innerHTML = localStorage.getItem("counter") > 0 ? text2 + ": " + localStorage.getItem("counter") : text2 + ": " + 0

// Event Listeners
adder.addEventListener("click", add)
saved_azkar.addEventListener("click", Delete)