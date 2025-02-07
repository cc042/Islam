// Wrappers
const findersurah = document.querySelector(".surahInputWrapper")
const SurahsWrapper = document.querySelector(".surahs")
const surahfinder = document.querySelector(".surahfinder")
const surahslength = document.querySelector(".length")

// Show And Hide Surahs Buttons
const showall = document.querySelector(".showall")
const clear = document.querySelector(".Clear")

// Additions
var number = 0
surahslength.innerHTML = number

// Show All Surahs
function ShowAllSurahs(Showed = Boolean) {
	number = 0
	SurahsWrapper.innerHTML = ""
	if (Showed) {
		clear.disabled = false
		for (let i = 0; i < surahs.length; i++) {
			number += 1
			SurahsWrapper.innerHTML += `<div class="surah">
					<h1 class="surahName">${surahs[i].name}</h1>
					<h2 class="surahType">${surahs[i].type}</h2>
					<h2 class="surahOrder">${surahs[i].Order}</h2>
					<h2 class="surahVerses">${surahs[i].verses}</h2>
					<button class="read" onclick="GoToSurah('${surahs[i].name}')">اقرأ</button>
					<button class="tafser" style="margin-bottom:0px;" onclick="GoToTafser('${surahs[i].summary}')">التفسير</button>
				</div>`
			surahslength.innerHTML = number

		}
	}
	else {
		SurahsWrapper.innerHTML = ``
	}
}

// Clear The Entire Surahs
function Clear() {
	number = 0
	surahslength.innerHTML = number
	if (!SurahsWrapper.innerHTML) {
		clear.disabled = true;
		return false;
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

// Go to the surahs Link
function GoToSurah(surah) {
	open(`quran/${surah}.html`, "_blank");
}

// Show The Surahs Tafser
function GoToTafser(tafser) {
	alert1.showModal()
	alertText.innerHTML = tafser
}

// Validate Arabic
function validateArabicInput(event) {
	const inputValue = event.target.value;
	const arabicRegex = /^[\u0600-\u06FF\s]+$/; // Regex for Arabic letters and spaces

	if (!arabicRegex.test(inputValue)) {
		event.target.setCustomValidity('يُسمح فقط بالأحرف العربية والمسافات.'); // Set custom validation message
	} else {
		event.target.setCustomValidity(''); // Clear custom validation message
	}
}

// Search for the surahs using the it`s name
function FindSurahwithName() {
	const searchbar = surahfinder.value.toLowerCase()
	if (searchbar) {
		findonn(searchbar)
		// surahfinder.value = ""
	}
	else {
		findoff("أدخل أسم السورة", "تنبيه")
	}
}

function findonn(search) {
	clear.disabled = false
	number = 0
	surahs.find(finder => {
		if (finder.name.toLowerCase() == search) {
			console.log(finder)
			SurahsWrapper.innerHTML += `<div class="surah"><h1 class="surahName">${finder.name}</h1><h2 class="surahType">${finder.type}</h2><h2 class="surahOrder">${finder.Order}</h2><h2 class="surahVerses">${finder.verses}</h2><button class="read" onclick="GoToSurah('${finder.name}')">اقرأ</button><button class="tafser" onclick="GoToTafser('${finder.summary}')">التفسير</button><div class="listen"><button class="stop" onclick="pauseSurah()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg></button><button class="play" onclick="playSurah('${finder.link}', this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="currentColor"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button></div></div>`;
			number += 1
			surahslength.innerHTML = number
		}
	});
}

// Search for the surahs using the letter
function findsurahwithletter() {
	const searchbar = surahfinder.value.toLowerCase()
	if (searchbar) {
		surahfinder.value = ""
		findonl(searchbar)
	}
	else {
		findoff("أدخل أسم السورة", "تنبيه")
	}
}

function findonl(search) {
	clear.disabled = false
	SurahsWrapper.innerHTML = ""; // Clear the wrapper before adding new results
	number = 0
	surahs.find(finder => {
		if (finder.name.toLowerCase().includes(search)) {
			number += 1
			SurahsWrapper.innerHTML += `<div class="surah"><h1 class="surahName">${finder.name}</h1><h2 class="surahType">${finder.type}</h2><h2 class="surahOrder">${finder.Order}</h2><h2 class="surahVerses">${finder.verses}</h2><button class="read" onclick="GoToSurah('${finder.name}')">اقرأ</button><button class="tafser" onclick="GoToTafser('${finder.summary}')">التفسير</button><div class="listen"><button class="stop" onclick="pauseSurah()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg></button><button class="play" onclick="playSurah('${finder.link}', this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="currentColor"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button></div></div>`;
			surahslength.innerHTML = number
		}
	});
}



clear.addEventListener("click", Clear)
findersurah.addEventListener('input', validateArabicInput);
showall.addEventListener("click", () => { ShowAllSurahs(true) })
findersurah.addEventListener("submit", e => { e.preventDefault(); ShowAllSurahs(false); findonn() })

// أسماء الله الحسنى
const Allah_names = document.querySelector(".names");
for (let i = 0; i < namesOfAllah.length; i++) { Allah_names.innerHTML += `<div class="name"><h1>الاسم: ${namesOfAllah[i].name}</h1><p>المعنى: ${namesOfAllah[i].meaning}</p></div>` }