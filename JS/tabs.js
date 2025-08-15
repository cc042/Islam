const tabsElement = document.querySelectorAll(".tabs");
const details = document.querySelector("details");
const sections = document.querySelectorAll("section");
const sectionHeaderTitle = document.querySelectorAll(".contentSectionHeader");

class MakeTab {
    constructor() {
        this.tabs = {
            "#content1": "القرآن الكريم",
            "#content2": "أسماء الله",
            "#content3": "أوقات الصلاة",
            "#content4": "الأستماع",
            "#content5": "عداد الأذكار",
            "#content6": "الإعدادات",
            "#content8": "المزيد"
        };
        this.filteredKeys = Object.keys(this.tabs);
        this.filteredValue = Object.values(this.tabs);

        // Set default hash to #content1 if no hash is present
        if (!location.hash || !this.tabs[location.hash]) {
            location.hash = "#content1";
        }
    }

    makeTabs() {
        tabsElement.forEach(tabElement => {
            for (let i = 0; i < this.filteredValue.length; i++) {
                tabElement.innerHTML += `<li><button onclick='location.href="${this.filteredKeys[i]}"' class="tab-label" data-tab="${this.filteredKeys[i]}">
                    ${this.filteredValue[i]}
                </button></li>`;
            }
        });

        return this;
    }

    checkOpened(clickedTabText = null) {
        // Update section header title with either the clicked tab text or the default for the current hash
        const currentText = clickedTabText || this.tabs[location.hash] || this.filteredValue[0];
        sectionHeaderTitle.forEach(title => {
            title.innerHTML = currentText;
        });

        this.filteredKeys.forEach(tab => {
            const element = document.querySelector(tab);
            if (element) { // Check if element exists before manipulating it
                if (location.hash.includes(tab)) {
                    element.classList.add("active");
                } else {
                    element.classList.remove("active");
                }
            }
        });
    }
}

const makeTab = new MakeTab();
makeTab.makeTabs();
makeTab.checkOpened();

// Only add event listeners if elements exist
const tabLabels = document.querySelectorAll(".tab-label");
if (tabLabels.length > 0) {
    tabLabels.forEach(label => {
        label.addEventListener("click", (e) => {
            if (details) details.removeAttribute("open");
            // Get the text content of the clicked button and pass it to checkOpened
            const clickedTabText = e.target.textContent.trim();
            makeTab.checkOpened(clickedTabText);
        });
    });
}

// Handle hash changes if user navigates back/forward
window.addEventListener('hashchange', () => {
    makeTab.checkOpened();
});