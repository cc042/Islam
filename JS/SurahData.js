// Wrappers
const findsurah = document.querySelector(".surahInputWrapper")
const SurahsWrapper = document.querySelector(".surahs")

// Show And Hide Surahs Buttons
const showall = document.querySelector(".showall")
const clear = document.querySelector(".Clear")

// Alerts
const alert1 = document.querySelector(".alert1")
const alertText = document.querySelector(".alert1text")

// Additions
var number = 0
var number2 = 0
let currentAudio = null;

// Surah Player
let player = new Audio();

// Show All Surahs
function ShowAllSurahs(Showed) {
	if (Showed) {
		clear.disabled = false
		for (let i = 0; i < surahs.length; i++) {
			SurahsWrapper.innerHTML += `<div class="surah">
					<h1 class="surahName">${surahs[i].name}</h1>
					<h2 class="surahType">${surahs[i].type}</h2>
					<h2 class="surahOrder">${surahs[i].Order}</h2>
					<h2 class="surahVerses">${surahs[i].verses}</h2>
					<button class="read" onclick="GoToSurah('${surahs[i].name}')">اقرأ</button>
					<button class="tafser" style="margin-bottom:0px;" onclick="GoToTafser('${surahs[i].summary}')">التفسير</button>
				</div>`
		}
	}
	else {
		SurahsWrapper.style.opacity = 0;
		SurahsWrapper.style.height = 0;
		window.scrollBy(0, -window.scrollY);
		SurahsWrapper.addEventListener("transitionend", () => {
			navigator.vibrate(200);
			SurahsWrapper.innerHTML = null;
			clear.disabled = true;
		});
	}
}

// Clear The Entire Surahs
function Clear() {
	if (SurahsWrapper.innerHTML) {
		ShowAllSurahs(false)
		console.log("the surah is deleted")
	}
	else {
		clear.disabled = true;
		return false;
	}
}

function GoToSurah(surah) {
	open(`quran/${surah}.html`, "_blank");
}

function GoToTafser(tafser) {
	alert1.showModal()
	alertText.innerHTML = tafser
}

clear.addEventListener("click", Clear)
showall.addEventListener("click", () => { ShowAllSurahs(true) })

// أسماء الله الحسنى
const Allah_names = document.querySelector(".names");
for (let i = 0; i < namesOfAllah.length; i++) {
	Allah_names.innerHTML += `<div class="name"><h1>الاسم: ${namesOfAllah[i].name}</h1><p>المعنى: ${namesOfAllah[i].meaning}</p></div>`
}