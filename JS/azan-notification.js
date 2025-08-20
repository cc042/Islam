// azan-notification.js
class AzanNotifier {
    constructor() {
        this.prayerSounds = {
            'Fajr': 'assets/sounds/azan-fajr.mp3',
            'Dhuhr': 'assets/sounds/azan-dhuhr.mp3',
            'Asr': 'assets/sounds/azan-asr.mp3',
            'Maghrib': 'assets/sounds/azan-maghrib.mp3',
            'Isha': 'assets/sounds/azan-isha.mp3'
        };

        this.checkPrayerTimesInterval = null;
        this.currentAudio = null;
        this.isPlaying = false;

        this.init();
    }

    init() {
        // طلب الإذن للإشعارات عند تحميل الصفحة
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }

        // التحقق من أوقات الصلاة كل دقيقة
        this.checkPrayerTimesInterval = setInterval(() => {
            this.checkPrayerTimes();
        }, 60000);

        // التحقق فورًا عند التحميل
        this.checkPrayerTimes();
    }

    async checkPrayerTimes() {
        try {
            const city = localStorage.getItem('lastSearchedCity') || 'Cairo';
            const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=EG&method=5`);

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            if (data.code === 200 && data.data) {
                this.monitorPrayerTimes(data.data.timings);
            }
        } catch (error) {
            console.error('Error fetching prayer times:', error);
        }
    }

    monitorPrayerTimes(timings) {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();

        const prayers = [
            { name: 'Fajr', time: timings.Fajr },
            { name: 'Dhuhr', time: timings.Dhuhr },
            { name: 'Asr', time: timings.Asr },
            { name: 'Maghrib', time: timings.Maghrib },
            { name: 'Isha', time: timings.Isha }
        ];

        prayers.forEach(prayer => {
            const [hours, minutes] = prayer.time.split(' ')[0].split(':').map(Number);
            const prayerTime = hours * 60 + minutes;

            // إذا كان وقت الصلاة خلال الدقيقة الماضية ولم ننبه بعد
            if (Math.abs(currentTime - prayerTime) <= 1) {
                const notifiedKey = `notified_${prayer.name}_${now.getDate()}`;
                if (!localStorage.getItem(notifiedKey)) {
                    this.playAzan(prayer.name);
                    localStorage.setItem(notifiedKey, 'true');
                }
            }
        });
    }

    playAzan(prayerName) {
        // إيقاف أي أذان قيد التشغيل
        this.stopAzan();

        // تشغيل صوت الأذان
        const audioSrc = this.prayerSounds[prayerName] || 'assets/sounds/azan-general.mp3';
        this.currentAudio = new Audio(audioSrc);
        this.currentAudio.play().catch(error => {
            console.error('Error playing azan:', error);
        });

        this.isPlaying = true;

        // إظهار إشعار حتى إذا كان التبويب غير نشط
        this.showNotification(prayerName);

        // إرسال رسالة إلى Service Worker لتشغيل الصوت في الخلفية
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({
                type: 'PLAY_AZAN',
                prayerName: prayerName,
                audioSrc: audioSrc
            });
        }
    }

    stopAzan() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }
        this.isPlaying = false;
    }

    showNotification(prayerName) {
        const prayerNames = {
            'Fajr': 'الفجر',
            'Dhuhr': 'الظهر',
            'Asr': 'العصر',
            'Maghrib': 'المغرب',
            'Isha': 'العشاء'
        };

        const prayerNameAr = prayerNames[prayerName] || prayerName;

        if ('Notification' in window && Notification.permission === 'granted') {
            const notification = new Notification('حان وقت الصلاة', {
                body: `حان الآن وقت صلاة ${prayerNameAr}`,
                icon: 'assets/headers_assets/belief.png',
                tag: 'prayer-time'
            });

            notification.onclick = () => {
                window.focus();
                notification.close();
            };

            setTimeout(() => notification.close(), 10000);
        }
    }
}

// تهيئة منبه الأذان عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.azanNotifier = new AzanNotifier();
});