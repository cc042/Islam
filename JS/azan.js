const countryInputWrapper = document.querySelector(".countryInputWrapper");
const prayers = document.querySelector(".prayers");
const countryfinder = document.querySelector(".countryfinder");
const findcountry = document.querySelector(".findcountry");

// Prayer times elements
const Fajr = document.querySelector(".El-Fajr");
const Shurooq = document.querySelector(".El-Shurooq");
const Dhuhrs = document.querySelector(".El-Dhuhr");
const Asr = document.querySelector(".El-Asr");
const Maghrib = document.querySelector(".El-Maghrib");
const Isha = document.querySelector(".El-Isha");

// Cache for prayer times
const prayerTimesCache = {};
let isLoading = false;

// Set initial state
if (prayers) prayers.style.display = "none";

function validateArabicInput(inputValue) {
    // Allow Arabic letters, spaces, and common city name characters
    const arabicRegex = /^[\u0600-\u06FF\s\-()]+$/;
    
    if (!arabicRegex.test(inputValue)) {
        return {
            isValid: false,
            message: 'يُسمح فقط بالأحرف العربية والمسافات والرموز الشائعة في أسماء المدن'
        };
    }
    return { isValid: true };
}

function showLoading() {
    if (!findcountry) return;
    
    isLoading = true;
    findcountry.innerHTML = `
        <svg style="animation: rotate 1s ease infinite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    `;
    findcountry.disabled = true;
}

function hideLoading() {
    if (!findcountry) return;
    
    isLoading = false;
    findcountry.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
    `;
    findcountry.disabled = false;
}

function showTimes(prayerData) {
    if (!prayerData || !prayerData.timings) {
        showError("بيانات الأوقات غير متوفرة حالياً", "خطأ");
        return;
    }

    // Format and display times
    if (Fajr) Fajr.textContent = formatTime(prayerData.timings.Fajr);
    if (Shurooq) Shurooq.textContent = formatTime(prayerData.timings.Sunrise);
    if (Dhuhrs) Dhuhrs.textContent = formatTime(prayerData.timings.Dhuhr);
    if (Asr) Asr.textContent = formatTime(prayerData.timings.Asr);
    if (Maghrib) Maghrib.textContent = formatTime(prayerData.timings.Maghrib);
    if (Isha) Isha.textContent = formatTime(prayerData.timings.Isha);
    
    if (prayers) prayers.style.display = "flex";
}

function formatTime(timeString) {
    if (!timeString) return "00:00 AM";
    
    // Remove any timezone information (e.g., +03)
    timeString = timeString.split(' ')[0];
    
    // Split into hours and minutes
    const [hours, minutes] = timeString.split(':').map(Number);
    
    // Convert to 12-hour format
    let period = 'AM';
    let formattedHours = hours;
    
    if (hours >= 12) {
        period = 'PM';
        if (hours > 12) {
            formattedHours = hours - 12;
        }
    }
    
    // Handle midnight (0 hours)
    if (hours === 0) {
        formattedHours = 12;
    }
    
    return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
}

async function fetchData(city) {
    if (isLoading || !city) return;
    
    // Check cache first
    if (prayerTimesCache[city]) {
        showTimes(prayerTimesCache[city]);
        return;
    }

    showLoading();
    
    try {
        // Using Aladhan API v1
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=EG&method=5`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.code === 200 && data.data) {
            // Cache the result
            prayerTimesCache[city] = data.data;
            showTimes(data.data);
        } else {
            showError("لم يتم العثور على أوقات الصلاة لهذه المدينة", "تنبيه");
        }
    } catch (error) {
        console.error("Error fetching prayer times:", error);
        showError("حدث خطأ أثناء جلب بيانات الأوقات، يرجى المحاولة لاحقاً", "خطأ");
    } finally {
        hideLoading();
    }
}

function showError(message, title) {
    const alert1 = document.querySelector(".alert1");
    const alertText = document.querySelector(".alert1text");
    const alertHeader = document.querySelector(".alertheader");
    
    if (alert1 && alertText && alertHeader) {
        alert1.showModal();
        alertText.textContent = message;
        alertHeader.textContent = title;
    } else {
        console.error("Error:", title, message);
    }
}

function handleSubmit(e) {
    e.preventDefault();
    if (!countryfinder) return;
    GetTimes(countryfinder.value.trim());
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (!countryfinder) return;
        GetTimes(countryfinder.value.trim());
    }
}

function handleInput(e) {
    const validation = validateArabicInput(e.target.value);
    if (!validation.isValid) {
        e.target.classList.add('invalid-input');
    } else {
        e.target.classList.remove('invalid-input');
    }
}

function GetTimes(city) {
    if (!city) {
        if (countryfinder) {
            city = countryfinder.value.trim();
        } else {
            showError("عنصر البحث غير موجود", "خطأ");
            return;
        }
    }
    
    const validation = validateArabicInput(city);
    if (!validation.isValid) {
        showError(validation.message || "اسم المدينة يحتوي على أحرف غير مسموح بها", "تنبيه");
        return;
    }
    
    fetchData(city);
}

// Event listeners
if (countryfinder) {
    countryfinder.addEventListener('input', handleInput);
    countryfinder.addEventListener('keypress', handleKeyPress);
}

if (countryInputWrapper) {
    countryInputWrapper.addEventListener("submit", handleSubmit);
}

// Add some CSS for invalid input
const style = document.createElement('style');
style.textContent = `
    .invalid-input {
        border-color: #ff4444 !important;
        box-shadow: 0 0 5px rgba(255, 68, 68, 0.5) !important;
    }
`;
document.head.appendChild(style);