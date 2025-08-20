// هذا الملف سيعمل مع Service Worker لتشغيل الصوت في الخلفية

// تحديث Service Worker الموجود (sw.js)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW registered: ', registration);
    }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
    });
}

// إضافة معالج للرسائل من Service Worker
navigator.serviceWorker.addEventListener('message', event => {
    if (event.data.type === 'AZAN_TIME') {
        if (window.azanNotifier) {
            window.azanNotifier.playAzan(event.data.prayerName);
        }
    }
});

// إضافة معالج للرسائل إلى Service Worker
navigator.serviceWorker.addEventListener('message', event => {
    if (event.data.type === 'AZAN_TIME') {
        if (window.azanNotifier) {
            window.azanNotifier.playAzan(event.data.prayerName);
        }
    }

    // الرد على طلب المدينة من Service Worker
    else if (event.data.type === 'GET_LAST_CITY') {
        const city = localStorage.getItem('lastSearchedCity') || 'Cairo';
        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'LAST_CITY_RESPONSE',
                city: city
            });
        }
    }
});