const countryInputWrapper = document.querySelector(".countryInputWrapper")
const prayers = document.querySelector(".prayers")
const countryfinder = document.querySelector(".countryfinder") 

// Prayers Times
const Fajr = document.querySelector(".El-Fajr")
const Shurooq = document.querySelector(".El-Shurooq")
const Dhuhrs = document.querySelector(".El-Dhuhr")
const Asr = document.querySelector(".El-Asr")
const Maghrib = document.querySelector(".El-Maghrib")
const Isha = document.querySelector(".El-Isha")

function GetTimes() {
    if (countryfinder.value.trim()) {
        jQuery(function ($) {
            $.getJSON(`https://muslimsalat.com/${countryfinder.value.trim()}/daily.json?jsoncallback=?`, function (times) {
                countryfinder.value = ""
                if (times.status_description = "Succses." ) {
                    // Make The Wrapper Appears
                    prayers.style.display = "flex";
    
                    // Prayers Api Times
                    Fajr.innerHTML = times.items[0].fajr;
                    Shurooq.innerHTML = times.items[0].shurooq;
                    Dhuhrs.innerHTML = times.items[0].dhuhr;
                    Asr.innerHTML = times.items[0].asr;
                    Maghrib.innerHTML = times.items[0].maghrib;
                    Isha.innerHTML = times.items[0].isha;
                }
                else {
                    alertText.innerHTML = "فشلت العملية."
                    prayers.style.display = "none";
                }
            });
        });
    }
    else {
        alert1.showModal()
        alertText.innerHTML = "أدخل أسم المدينة."
    }
}

countryInputWrapper.addEventListener("submit", (e) => { e.preventDefault(); GetTimes(); })