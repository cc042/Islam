const countryInputWrapper = document.querySelector(".countryInputWrapper")
const prayers = document.querySelector(".prayers")
const countryfinder = document.querySelector(".countryfinder")

// Status
const AzanStatus = document.querySelector(".status2")

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
    
                    // Country and City
                    AzanStatus.innerHTML = "البلد: " + times.country + " / " + "المدينة: " + times.city
                }
                else {
                    prayers.style.display = "none";
                    AzanStatus.innerHTML = "أدخل أسم مدينة صحيحة"
                }
            });
        });
    }
    else {
        AzanStatus.innerHTML = "أدخل أسم مدينة"
    }
}

countryInputWrapper.addEventListener("submit", (e) => { e.preventDefault(); GetTimes(); })