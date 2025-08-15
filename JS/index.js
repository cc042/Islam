// DOM Elements
const elements = {
    Load: document.querySelector(".Load"),
    alert1: document.querySelector(".alert1"),
    alertText: document.querySelector(".alert1text"),
    alertHeaderText: document.querySelector(".alertheader"),
    text: document.querySelector("#counter_azkar"),
    adder: document.querySelector(".counter_azkar"),
    saved_azkar: document.querySelector("#saved_azkar"),
    ProjectsWrapper: document.querySelector(".Projects"),
    timeshow: document.querySelector(".timeshow"),
    scrollup: document.querySelector(".scrollup"),
    SurahsWrapper: typeof SurahsWrapper !== 'undefined' ? SurahsWrapper : null,
    screen_condition: document.querySelector(".screen_condition"),
    sidebar: document.querySelector(".sidebar"),
    userNameDialog: document.querySelector(".User_Name"),
    nameInput: document.querySelector(".NameInput"),
    nameSubmit: document.querySelector(".NameSubmit"),
    changeNameBtn: document.querySelector(".ChangeName")
};

// Initialize loader
if (elements.Load) {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            elements.Load.close();
        }, 1000);
    });
}

// Cookie functions
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 2050 00:00:01 GMT;';
}

// Security: Prevent context menu and double-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener("dblclick", e => e.preventDefault());

// Security: Disable developer tools shortcuts
document.onkeydown = function (e) {
    const blockedKeys = {
        123: true, // F12
        'I': e.ctrlKey && e.shiftKey,
        'C': e.ctrlKey && e.shiftKey,
        'J': e.ctrlKey && e.shiftKey,
        'U': e.ctrlKey,
        'S': e.ctrlKey,
        'A': e.ctrlKey,
        'X': e.ctrlKey,
        'Esc': true
    };

    if (blockedKeys[e.keyCode] || blockedKeys[e.key]) {
        e.preventDefault();
        return false;
    }
};

// Alert dialog function
function findoff(msg = "", header = "") {
    if (elements.alert1 && elements.alertText && elements.alertHeaderText) {
        elements.alert1.showModal();
        elements.alertText.textContent = msg;
        elements.alertHeaderText.textContent = header;
    }
}

function closeDialog(dialog) {
    document.querySelector(dialog).close()
}

if (elements.ProjectsWrapper) {
    elements.ProjectsWrapper.innerHTML = projects.map(project => `
        <div class="project">
            <h1>الأسم: ${project.NAME}</h1>
            <p>الرابط: <a target="_blank" href='${project.LINK}'>أضغط هنا</a></p>
            <p>الوصف: ${project.DESCRIPTION}</p>
        </div>
    `).join('');
}

// Time display
if (elements.timeshow) {
    const updateTime = () => {
        elements.timeshow.textContent = new Intl.DateTimeFormat('ar-Fr-u-ca-islamic', {
            day: 'numeric',
            month: 'long',
            weekday: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(Date.now());
    };
    updateTime();
    setInterval(updateTime, 1000);
}

// Theme switcher
class ThemeSwitch {
    constructor() {
        this.switcher = document.querySelectorAll(".darkmode");
        this.darkmode = getCookie("darked") === "true" || localStorage.getItem("darked") === "true";
        this.initTheme();
        this.initSwitchers();
    }

    initTheme() {
        if (this.darkmode) {
            this.DarkModeApply();
        } else {
            this.DarkModeDelete();
        }
    }

    initSwitchers() {
        this.switcher.forEach(element => {
            element.addEventListener("click", () => {
                this.darkmode = getCookie("darked") === "true" || localStorage.getItem("darked") === "true";
                this.darkmode !== true ? this.DarkModeApply() : this.DarkModeDelete();
            });
        });
    }

    DarkModeApply() {
        setCookie("darked", "true", 365);
        localStorage.setItem("darked", "true");
        document.body.classList.add("dark-mode");
    }

    DarkModeDelete() {
        setCookie("darked", "false", 365);
        localStorage.setItem("darked", "false");
        document.body.classList.remove("dark-mode");
    }
}

// Zekr
class Zekr {
    constructor(elements) {
        this.elements = elements; // Store element references
        this.StorageName = "counter"
        this.counter1 = 0;
        this.counter2 = 0 || localStorage.getItem(this.StorageName);
        this.text1 = "عدد التسابيح: ";
        this.text2 = "أخر تسجيل: ";
    }

    add() {
        this.counter1++ || localStorage.getItem(this.StorageName);
        this.counter2 = localStorage.setItem(this.StorageName, this.counter1)
        this.setvalue(this.counter1, this.counter2)
    }

    reset() {
        this.counter1 = 0
        this.counter2 = this.counter1
        this.setvalue(this.counter1, localStorage.setItem(this.StorageName, this.counter1))
    }

    setvalue(txt1, txt2) {
        elements.text.innerHTML = this.text1 + " " + txt1;
        elements.saved_azkar.innerHTML = this.text2 + " " + txt2;
    }
}

// User Name Management
class UserNameManager {
    constructor() {
        this.userName = getCookie("userName") || "";
        this.init();
    }

    init() {
        // Only show dialog if no name is stored and it's the first visit
        if (!this.userName && !sessionStorage.getItem('nameDialogShown') && elements.userNameDialog) {
            this.showNameDialog(true);
            sessionStorage.setItem('nameDialogShown', 'true');
        }

        // Setup event listeners
        if (elements.nameSubmit) {
            elements.nameSubmit.addEventListener("click", (e) => {
                e.preventDefault();
                const name = elements.nameInput.value.trim();

                if (name) {
                    this.setUserName(name);
                    elements.userNameDialog.close();
                } else {
                    findoff("الرجاء إدخال اسم صحيح", "خطأ في الإدخال");
                }
            });
        }

        if (elements.changeNameBtn) {
            elements.changeNameBtn.addEventListener("click", () => {
                this.showNameDialog(false);
            });
        }
    }

    showNameDialog(isInitial) {
        if (elements.userNameDialog) {
            elements.userNameDialog.showModal();

            // For initial dialog, prevent closing without name
            if (isInitial) {
                elements.userNameDialog.addEventListener('click', (e) => {
                    if (e.target === elements.userNameDialog) {
                        e.preventDefault();
                    }
                });

                // Also prevent ESC key from closing
                elements.userNameDialog.addEventListener('keydown', (e) => {
                    if (e.key === "Escape") {
                        e.preventDefault();
                    }
                });
            }
        }
    }

    setUserName(name) {
        if (name && name.trim() !== "") {
            this.userName = name.trim();
            setCookie("userName", this.userName, 365);
            findoff(`مرحبًا ${this.userName}`, "تم تغيير الأسم بنجاح");
            return true;
        }
        return false;
    }

    getUserName() {
        return this.userName;
    }
}

// Responsive sidebar
class ResponsiveSideBar {
    constructor() {
        this.init();
    }

    init() {
        if (elements.screen_condition && elements.sidebar) {
            this.setupResponsiveBehavior();
            window.addEventListener("resize", () => this.setupResponsiveBehavior());
        }
    }

    closeSideBar() {
        elements.sidebar.setAttribute("aria-opened", "false");
    }

    setupResponsiveBehavior() {
        if (window.innerWidth <= 520) {
            elements.screen_condition.addEventListener("click", () => {
                elements.sidebar.setAttribute("aria-opened", "true");
            });
        } else {
            this.closeSideBar();
        }
    }

    gridResposive(wrapper) {
        if (!wrapper) return;
        const width = window.innerWidth;
        wrapper.style.gridTemplateColumns =
            width > 950 ? "repeat(3, 1fr)" :
                width <= 950 && width >= 800 ? "repeat(2, 1fr)" :
                    "repeat(1, 1fr)";
    }
}

// Initialize main components
const userNameManager = new UserNameManager();
const switchTheme = new ThemeSwitch();
const sideBar = new ResponsiveSideBar();
const zekrCounter = new Zekr();

// Event listeners
elements.adder.addEventListener("click", () => {
    zekrCounter.add()
})

elements.saved_azkar.addEventListener("click", () => {
    zekrCounter.reset()
})

// Enhanced scroll-to-top button with robust functionality
if (elements.scrollup) {
    let isScrolling = false;
    let scrollEndTimer;

    // Initial state
    elements.scrollup.style.transition = "opacity 0.3s ease";
    elements.scrollup.style.display = 'none';
    elements.scrollup.style.opacity = '0';

    const checkScrollPosition = () => {
        if (window.scrollY > 300 && !isScrolling) {
            elements.scrollup.style.display = 'flex';
            setTimeout(() => elements.scrollup.style.opacity = '0.8', 10);
        } else if (window.scrollY <= 300 && !isScrolling) {
            elements.scrollup.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 300) {
                    elements.scrollup.style.display = 'none';
                }
            }, 300);
        }
    };

    // Smooth scroll function
    const scrollToTop = () => {
        isScrolling = true;
        elements.scrollup.style.opacity = '0.8';
        elements.scrollup.style.display = 'flex';

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => {
            isScrolling = false;
            checkScrollPosition();
        }, 1000);
    };

    // Click handler
    elements.scrollup.addEventListener("click", scrollToTop);

    // Scroll event listener with debounce
    let isTicking = false;
    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                if (!isScrolling) {
                    checkScrollPosition();
                }
                isTicking = false;
            });
            isTicking = true;
        }
    });

    // Initial check
    checkScrollPosition();
}

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
    if (elements.sidebar && elements.sidebar.getAttribute("aria-opened") === "true" &&
        !e.target.closest(".sidebar") && !e.target.closest(".screen_condition")) {
        elements.sidebar.setAttribute("aria-opened", "false");
    }
});