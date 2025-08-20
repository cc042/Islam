// Service Worker for Background Playback
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
    if (event.data.type === 'PLAY') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ type: 'PLAY' });
            });
        });
    } else if (event.data.type === 'PAUSE') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ type: 'PAUSE' });
            });
        });
    }
});

// Service Worker for Background Playback and Azan Notifications
const CACHE_NAME = 'islami-app-v1';
const AZAN_CACHE = 'azan-audio-cache';

// مصادر الصوت للأذان
const azanAudioSources = {
    'Fajr': 'assets/sounds/azan-fajr.mp3',
    'Dhuhr': 'assets/sounds/azan-dhuhr.mp3',
    'Asr': 'assets/sounds/azan-asr.mp3',
    'Maghrib': 'assets/sounds/azan-maghrib.mp3',
    'Isha': 'assets/sounds/azan-isha.mp3',
    'default': 'assets/sounds/azan-general.mp3'
};

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/style/style.css',
                    '/JS/index.js',
                    '/assets/headers_assets/belief.png'
                ]);
            })
            .then(() => {
                // تخزين أصوات الأذان في cache منفصل
                return caches.open(AZAN_CACHE);
            })
            .then(azanCache => {
                // يمكن إضافة أصوات الأذان هنا إذا أردت التخزين المسبق
                return self.skipWaiting();
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

// معالج fetch لخدمة طلبات الملفات الصوتية من التخزين المؤقت
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // إذا كان طلبًا لملف صوت أذان
    if (url.pathname.includes('assets/sounds/azan-')) {
        event.respondWith(
            caches.open(AZAN_CACHE)
                .then(cache => {
                    return cache.match(event.request)
                        .then(response => {
                            return response || fetch(event.request).then(networkResponse => {
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                        });
                })
        );
    }
});

// معالج الرسائل من الصفحة الرئيسية
self.addEventListener('message', event => {
    if (event.data.type === 'PLAY_AZAN') {
        // إرسال إشعار وإشعار للصفحة النشطة
        event.waitUntil(
            self.registration.showNotification('حان وقت الصلاة', {
                body: `حان الآن وقت صلاة ${event.data.prayerName}`,
                icon: 'assets/headers_assets/belief.png',
                tag: 'prayer-time',
                requireInteraction: true
            }).then(() => {
                // إرسال رسالة إلى جميع العملاء (التبويبات المفتوحة)
                return self.clients.matchAll();
            }).then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'AZAN_TIME',
                        prayerName: event.data.prayerName
                    });
                });
            })
        );
    }
    // معالجة الرسائل الأخرى (PLAY و PAUSE)
    else if (event.data.type === 'PLAY') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ type: 'PLAY' });
            });
        });
    } else if (event.data.type === 'PAUSE') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ type: 'PAUSE' });
            });
        });
    }
});

// معالج الإشعارات
self.addEventListener('notificationclick', event => {
    event.notification.close();

    event.waitUntil(
        self.clients.matchAll({ type: 'window' })
            .then(clientList => {
                if (clientList.length > 0) {
                    return clientList[0].focus();
                }
                return self.clients.openWindow('/');
            })
    );
});

// التحقق من أوقات الصلاة في الخلفية
self.addEventListener('sync', event => {
    if (event.tag === 'prayer-time-check') {
        event.waitUntil(checkPrayerTimesInBackground());
    }
});

// تسجيل مزامنة الخلفية
self.addEventListener('periodicsync', event => {
    if (event.tag === 'prayer-periodic-sync') {
        event.waitUntil(checkPrayerTimesInBackground());
    }
});

async function checkPrayerTimesInBackground() {
    // هذا سيتحقق من أوقات الصلاة حتى عندما يكون التطبيق مغلقًا
    // سنستخدم آخر مدينة تم البحث عنها من localStorage
    const clients = await self.clients.matchAll();
    let city = 'Cairo'; // المدينة الافتراضية

    if (clients.length > 0) {
        // محاولة الحصول على المدينة من أحد العملاء
        const messagePromise = new Promise(resolve => {
            clients[0].postMessage({ type: 'GET_LAST_CITY' });

            const messageHandler = event => {
                if (event.data.type === 'LAST_CITY_RESPONSE') {
                    resolve(event.data.city);
                    self.removeEventListener('message', messageHandler);
                }
            };

            self.addEventListener('message', messageHandler);

            // وقت انتظار للاستجابة
            setTimeout(() => resolve('Cairo'), 1000);
        });

        city = await messagePromise;
    }

    try {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=EG&method=5`);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            const now = new Date();
            const currentTime = now.getHours() * 60 + now.getMinutes();

            const prayers = [
                { name: 'Fajr', time: data.data.timings.Fajr },
                { name: 'Dhuhr', time: data.data.timings.Dhuhr },
                { name: 'Asr', time: data.data.timings.Asr },
                { name: 'Maghrib', time: data.data.timings.Maghrib },
                { name: 'Isha', time: data.data.timings.Isha }
            ];

            prayers.forEach(prayer => {
                const [hours, minutes] = prayer.time.split(' ')[0].split(':').map(Number);
                const prayerTime = hours * 60 + minutes;

                // إذا كان وقت الصلاة خلال الدقيقتين القادمتين
                if (prayerTime - currentTime <= 2 && prayerTime - currentTime >= 0) {
                    // إرسال إشعار للأذان
                    self.registration.showNotification('وقت الصلاة قريب', {
                        body: `صلاة ${prayer.name} بعد دقيقتين`,
                        icon: 'assets/headers_assets/belief.png',
                        tag: 'prayer-reminder'
                    });
                }

                // إذا كان وقت الصلاة الآن
                if (Math.abs(currentTime - prayerTime) <= 1) {
                    // إرسال رسالة إلى الصفحة النشطة لتشغيل الأذان
                    self.clients.matchAll().then(clients => {
                        clients.forEach(client => {
                            client.postMessage({
                                type: 'AZAN_TIME',
                                prayerName: prayer.name
                            });
                        });
                    });

                    // إظهار إشعار
                    self.registration.showNotification('حان وقت الصلاة', {
                        body: `حان الآن وقت صلاة ${prayer.name}`,
                        icon: 'assets/headers_assets/belief.png',
                        tag: 'prayer-time',
                        requireInteraction: true
                    });
                }
            });
        }
    } catch (error) {
        console.error('Error in background prayer time check:', error);
    }
}