// Prayer Times JavaScript
const countryInputWrapper = document.querySelector(".countryInputWrapper");
const countryfinder = document.querySelector(".countryfinder");
const findcountry = document.querySelector(".findcountry");
const UseLocation = document.querySelector(".UseLocation");
const prayerContent = document.querySelector('.prayer-countdown-content');

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
let nextPrayerTimer = null;
let currentPrayerData = null; // Store prayer data for timer updates

// Set initial state - hide prayer content initially
if (prayerContent) {
    prayerContent.style.display = "none";
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

function showTimes(prayerData, city) {
    if (!prayerData || !prayerData.timings) {
        showError("بيانات الأوقات غير متوفرة حالياً", "خطأ");
        return;
    }

    // Store prayer data for timer updates
    currentPrayerData = prayerData;

    // Format and display times
    if (Fajr) Fajr.textContent = formatTime(prayerData.timings.Fajr);
    if (Shurooq) Shurooq.textContent = formatTime(prayerData.timings.Sunrise);
    if (Dhuhrs) Dhuhrs.textContent = formatTime(prayerData.timings.Dhuhr);
    if (Asr) Asr.textContent = formatTime(prayerData.timings.Asr);
    if (Maghrib) Maghrib.textContent = formatTime(prayerData.timings.Maghrib);
    if (Isha) Isha.textContent = formatTime(prayerData.timings.Isha);

    // Show prayer countdown content
    if (prayerContent) {
        prayerContent.style.display = "flex";
        prayerContent.classList.add('show');
    }

    // Update prayer countdown content
    updatePrayerCountdownContent(prayerData);

    // حفظ المدينة للاستخدام في الخلفية
    if (city) {
        localStorage.setItem('lastSearchedCity', city);
    }
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

function updatePrayerCountdownContent(prayerData) {
    if (!prayerData || !prayerData.timings) return;

    // Clear existing timer
    if (nextPrayerTimer) clearInterval(nextPrayerTimer);

    // Update content immediately
    updatePrayerTimes();

    // Update countdown every second
    nextPrayerTimer = setInterval(updatePrayerTimes, 1000);
}

function updatePrayerTimes() {
    if (!currentPrayerData || !currentPrayerData.timings) return;

    const now = new Date();
    const prayers = [
        { name: 'الفجر', time: currentPrayerData.timings.Fajr, key: 'Fajr', icon: 'assets/pray_assets/1.png' },
        { name: 'الشروق', time: currentPrayerData.timings.Sunrise, key: 'Sunrise', icon: 'assets/pray_assets/sunrise.png' },
        { name: 'الظهر', time: currentPrayerData.timings.Dhuhr, key: 'Dhuhr', icon: 'assets/pray_assets/dhuhr.png' },
        { name: 'العصر', time: currentPrayerData.timings.Asr, key: 'Asr', icon: 'assets/pray_assets/asr.png' },
        { name: 'المغرب', time: currentPrayerData.timings.Maghrib, key: 'Maghrib', icon: 'assets/pray_assets/maghrib.png' },
        { name: 'العشاء', time: currentPrayerData.timings.Isha, key: 'Isha', icon: 'assets/pray_assets/isha.png' }
    ];

    // Convert prayer times to Date objects
    const prayerTimes = prayers.map(prayer => {
        const [hours, minutes] = prayer.time.split(' ')[0].split(':').map(Number);
        const time = new Date();
        time.setHours(hours, minutes, 0, 0);
        return { ...prayer, timeObject: time };
    });

    // Find current and next prayer
    let currentPrayer = null;
    let nextPrayer = null;

    for (let i = 0; i < prayerTimes.length; i++) {
        if (prayerTimes[i].timeObject <= now &&
            (i === prayerTimes.length - 1 || prayerTimes[i + 1].timeObject > now)) {
            currentPrayer = prayerTimes[i];
            nextPrayer = i < prayerTimes.length - 1 ? prayerTimes[i + 1] : prayerTimes[0];
            break;
        }
    }

    // If no current prayer found (before first prayer of day)
    if (!currentPrayer) {
        currentPrayer = { name: 'لا يوجد صلاة حالية', timeObject: null };
        nextPrayer = prayerTimes[0];
    }

    // Update content
    updatePrayerContent(currentPrayer, nextPrayer, prayerTimes);
}

function updatePrayerContent(currentPrayer, nextPrayer, allPrayers) {
    const now = new Date();

    // Update current prayer
    const currentPrayerName = document.querySelector('.current-prayer-name');
    const currentPrayerStatus = document.querySelector('.current-prayer-status');

    if (currentPrayerName) {
        currentPrayerName.textContent = currentPrayer.name;
    }

    if (currentPrayerStatus) {
        if (currentPrayer.timeObject) {
            const timePassed = now - currentPrayer.timeObject;
            const hoursPassed = Math.floor(timePassed / (1000 * 60 * 60));
            const minutesPassed = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));

            if (hoursPassed > 0) {
                currentPrayerStatus.textContent = `منذ ${hoursPassed} ساعة و ${minutesPassed} دقيقة`;
            } else {
                currentPrayerStatus.textContent = `منذ ${minutesPassed} دقيقة`;
            }
        } else {
            currentPrayerStatus.textContent = 'قبل أوقات الصلاة اليوم';
        }
    }

    // Update next prayer
    const nextPrayerName = document.querySelector('.next-prayer-name');
    const nextPrayerTime = document.querySelector('.next-prayer-time');
    const countdownHours = document.querySelector('.countdown-hours');
    const countdownMinutes = document.querySelector('.countdown-minutes');
    const countdownSeconds = document.querySelector('.countdown-seconds');

    if (nextPrayerName) nextPrayerName.textContent = nextPrayer.name;
    if (nextPrayerTime) nextPrayerTime.textContent = formatTime(nextPrayer.time);

    if (nextPrayer.timeObject) {
        const timeDiff = nextPrayer.timeObject - now;

        if (timeDiff <= 0) {
            if (countdownHours) countdownHours.textContent = '00';
            if (countdownMinutes) countdownMinutes.textContent = '00';
            if (countdownSeconds) countdownSeconds.textContent = '00';

            // If time difference is negative, recalculate prayers
            updatePrayerTimes();
        } else {
            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            if (countdownHours) countdownHours.textContent = hours.toString().padStart(2, '0');
            if (countdownMinutes) countdownMinutes.textContent = minutes.toString().padStart(2, '0');
            if (countdownSeconds) countdownSeconds.textContent = seconds.toString().padStart(2, '0');
        }
    }

    // Update prayer times list
    updatePrayerTimesList(allPrayers, currentPrayer, nextPrayer);
}

function updatePrayerTimesList(prayers, currentPrayer, nextPrayer) {
    const prayerTimesGrid = document.querySelector('.prayer-times-grid');
    if (!prayerTimesGrid) return;

    prayerTimesGrid.innerHTML = '';

    prayers.forEach(prayer => {
        const prayerItem = document.createElement('div');
        prayerItem.className = 'prayer-time-item';

        // Add special styling for current and next prayers
        if (prayer.name === currentPrayer.name) {
            prayerItem.classList.add('prayer-now');
        } else if (prayer.name === nextPrayer.name) {
            prayerItem.classList.add('prayer-next');
        }

        // Create prayer item with image and name
        prayerItem.innerHTML = `
            <div>
                <img src="${prayer.icon}" alt="${prayer.name}" width="20">
                <span class="prayer-time-name">${prayer.name}</span>
            </div>
            <span class="prayer-time-value">${formatTime(prayer.time)}</span>
        `;

        prayerTimesGrid.appendChild(prayerItem);
    });
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
            showTimes(data.data, city);
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
    // You can implement your own error display here
    console.error("Error:", title, message);
    alert(`${title}: ${message}`);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!countryfinder) return;

    const city = countryfinder.value.trim();
    if (!city) {
        showError("يرجى إدخال اسم المدينة", "تنبيه");
        countryfinder.classList.add('invalid-input');
        setTimeout(() => countryfinder.classList.remove('invalid-input'), 2000);
        return;
    }

    GetTimes(city);
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (!countryfinder) return;

        const city = countryfinder.value.trim();
        if (!city) {
            showError("يرجى إدخال اسم المدينة", "تنبيه");
            countryfinder.classList.add('invalid-input');
            setTimeout(() => countryfinder.classList.remove('invalid-input'), 2000);
            return;
        }

        GetTimes(city);
    }
}

function GetTimes(city) {
    if (!city) {
        if (countryfinder) city = countryfinder.value.trim();
        else {
            showError("عنصر البحث غير موجود", "خطأ");
            return;
        }
    }

    fetchData(city);
}

async function getLocationAndFetchPrayerTimes() {
    if (!UseLocation) return;

    const button = UseLocation;
    const originalText = button.textContent;

    if (!navigator.geolocation) {
        showError('المتصفح لا يدعم خدمة الموقع', 'خطأ');
        return;
    }

    // Set loading state
    button.disabled = true;
    button.classList.add('loading');
    button.textContent = 'جاري تحديد الموقع...';

    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 15000,
                enableHighAccuracy: false
            });
        });

        const { latitude, longitude } = position.coords;

        // Use OpenStreetMap Nominatim for reverse geocoding
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=ar`);
        const data = await response.json();

        let cityName = '';

        if (data.address) {
            // Try different address properties to find the city name
            cityName = data.address.city || data.address.town || data.address.village ||
                data.address.municipality || data.address.county || data.address.state;
        }

        if (cityName) {
            countryfinder.value = cityName;
            // Fixed: Call fetchData directly instead of GetTimes to avoid recursion
            fetchData(cityName);
        } else {
            showError('تعذر الحصول على اسم المدينة من الموقع', 'خطأ');
        }

    } catch (error) {
        console.error('Geolocation error:', error);
        if (error.code === error.PERMISSION_DENIED) {
            showError('تم رفض الإذن بالوصول إلى الموقع، يرجى السماح بالوصول إلى الموقع في إعدادات المتصفح', 'خطأ الإذن');
        } else if (error.code === error.TIMEOUT) {
            showError('انتهت مهلة تحديد الموقع، يرجى المحاولة مرة أخرى', 'انتهت المهلة');
        } else {
            showError('تعذر الوصول إلى الموقع، يرجى إدخال اسم المدينة يدوياً', 'خطأ');
        }
    } finally {
        // Reset button state
        button.disabled = false;
        button.classList.remove('loading');
        button.textContent = originalText;
    }
}

// Event listeners
if (countryfinder) {
    countryfinder.addEventListener('keypress', handleKeyPress);
}

if (countryInputWrapper) {
    countryInputWrapper.addEventListener("submit", handleSubmit);
}

if (UseLocation) {
    UseLocation.addEventListener("click", getLocationAndFetchPrayerTimes);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Ensure prayer content is hidden initially
    if (prayerContent) {
        prayerContent.style.display = "none";
    }
});