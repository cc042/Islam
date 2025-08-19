const ShowAllSurahsSounds = document.querySelector(".showallSounds");
const ShekhSoundsDisplay = document.querySelector(".ShekhSounds");
const soundFinder = document.querySelector('.SurahNamefinder');
const ClearsSounds = document.querySelector(".ClearSounds");
const SoundsDisplay = document.querySelector(".sounds");
const findSound = document.querySelector(".findSound");
const OpenShoukhSoundDialog = document.querySelector(".ShoukhSounds")
const ShoukhSoundDialog = document.querySelector(".ShekhSoundsDialog")

class SoundPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentSound = null;
        this.currentPosition = 0;
        this.currentSurahIndex = 0;
        this.playlist = [];
        this.volume = 1;
        this.ShekhSounds = [
            {
                name: "مشاري راشد العفاسي",
                value: "afs",
                baseUrl: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/"
            },
            {
                name: "عبد الباسط عبد الصمد",
                value: "basit",
                baseUrl: "https://download.quranicaudio.com/quran/abdul_basit_murattal/"
            },
            {
                name: "ماهر المعيقلي",
                value: "maher",
                baseUrl: "https://server12.mp3quran.net/maher/Almusshaf-Al-Mojawwad/"
            },
            {
                name: "ياسر الدوسري",
                value: "yasser",
                baseUrl: "https://server11.mp3quran.net/yasser/"
            },
        ];
        this.currentReciter = this.ShekhSounds[0];
        this.serviceWorkerRegistration = null;
        this.currentlyPlayingElement = null;
        this.playCounts = this.loadPlayCounts();

        this.initServiceWorker();
        this.setupAudioEvents();
    }

    // Load play counts from localStorage
    loadPlayCounts() {
        const savedCounts = localStorage.getItem('surahPlayCounts');
        return savedCounts ? JSON.parse(savedCounts) : {};
    }

    // Save play counts to localStorage
    savePlayCounts() {
        localStorage.setItem('surahPlayCounts', JSON.stringify(this.playCounts));
    }

    // Increment play count for a surah
    incrementPlayCount(surahName) {
        if (!this.playCounts[surahName]) {
            this.playCounts[surahName] = 0;
        }
        this.playCounts[surahName]++;
        this.savePlayCounts();
    }

    // Get play count for a surah
    getPlayCount(surahName) {
        return this.playCounts[surahName] || 0;
    }

    async initServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                this.serviceWorkerRegistration = await navigator.serviceWorker.register('sw.js');
            } catch (error) {
                console.error('ServiceWorker registration failed:', error);
            }
        }
    }

    setupAudioEvents() {
        this.audio.addEventListener('timeupdate', () => {
            this.updateProgressBar();
            this.currentPosition = this.audio.currentTime;
        });

        this.audio.addEventListener('ended', () => {
            this.handleTrackEnd();
        });

        this.audio.addEventListener('volumechange', () => {
            this.volume = this.audio.volume;
        });
    }

    getSurahUrl(surahNumber) {
        const formattedNumber = String(surahNumber).padStart(3, '0');
        return `${this.currentReciter.baseUrl}${formattedNumber}.mp3`;
    }

    playSound(url, index, element) {
        if (index !== undefined) {
            this.currentSurahIndex = index;
        }

        // Reset all play/pause buttons first
        this.resetAllPlayButtons();

        // If same sound is being played, resume from paused position
        if (this.currentSound === url && this.audio) {
            this.audio.currentTime = this.currentPosition;
            this.audio.play()
                .then(() => {
                    this.isPlaying = true;
                    this.currentlyPlayingElement = element;
                    this.updatePlayButtonStates(element);
                })
                .catch(error => {
                    console.error("Playback error:", error);
                    findoff("تعذر تشغيل السورة، يرجى المحاولة لاحقاً", "خطأ");
                    this.isPlaying = false;
                });
            return;
        }

        // First stop any currently playing audio
        this.stopSound();

        // Create a new audio instance
        this.audio = new Audio();
        this.audio.crossOrigin = "anonymous";
        this.currentSound = url;
        this.currentPosition = 0;
        this.currentlyPlayingElement = element;

        // Set up events for new audio instance
        this.setupAudioEvents();

        this.audio.src = url;

        this.audio.play()
            .then(() => {
                this.isPlaying = true;
                this.updatePlayButtonStates(element);
                // Increment play count when playback starts
                const surahName = names[this.currentSurahIndex];
                this.incrementPlayCount(surahName);
                // Update the play count display
                this.updatePlayCountDisplay(element, surahName);
            })
            .catch(error => {
                console.error("Playback error:", error);
                findoff("تعذر تشغيل السورة، يرجى المحاولة لاحقاً", "خطأ");
                this.isPlaying = false;
            });

        // Update media session metadata
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: names[this.currentSurahIndex],
                artist: this.currentReciter.name,
                artwork: [
                    { src: 'assets/icons/quran-icon.png', sizes: '96x96', type: 'image/png' },
                    { src: 'assets/icons/quran-icon-192.png', sizes: '192x192', type: 'image/png' },
                    { src: 'assets/icons/quran-icon-512.png', sizes: '512x512', type: 'image/png' }
                ]
            });

            navigator.mediaSession.setActionHandler('play', () => this.resumePlayback());
            navigator.mediaSession.setActionHandler('pause', () => this.pauseSound());
            navigator.mediaSession.setActionHandler('previoustrack', () => this.playPrevious());
            navigator.mediaSession.setActionHandler('nexttrack', () => this.playNext());
        }
    }

    // Update the play count display for a surah
    updatePlayCountDisplay(element, surahName) {
        const playCountElement = element.querySelector('.play-count');
        if (playCountElement) {
            const count = this.getPlayCount(surahName);
            playCountElement.textContent = `تم التشغيل: ${count} مرة`;
        }
    }

    resetAllPlayButtons() {
        document.querySelectorAll('.play').forEach(btn => {
            btn.style.display = 'block';
        });
        document.querySelectorAll('.pause').forEach(btn => {
            btn.style.display = 'none';
        });
    }

    playNext() {
        if (this.currentSurahIndex < names.length - 1) {
            this.currentSurahIndex++;
            const nextUrl = this.getSurahUrl(this.currentSurahIndex + 1);
            const nextElement = SoundsDisplay.children[this.currentSurahIndex];
            this.playSound(nextUrl, this.currentSurahIndex, nextElement);
        }
    }

    playPrevious() {
        if (this.currentSurahIndex > 0) {
            this.currentSurahIndex--;
            const prevUrl = this.getSurahUrl(this.currentSurahIndex + 1);
            const prevElement = SoundsDisplay.children[this.currentSurahIndex];
            this.playSound(prevUrl, this.currentSurahIndex, prevElement);
        }
    }

    resumePlayback() {
        if (this.audio) {
            this.audio.play()
                .then(() => {
                    this.isPlaying = true;
                    this.updatePlayButtonStates(this.currentlyPlayingElement);
                });
        }
    }

    pauseSound() {
        if (this.isPlaying && this.audio) {
            this.audio.pause();
            this.currentPosition = this.audio.currentTime;
            this.isPlaying = false;
            this.updatePlayButtonStates(this.currentlyPlayingElement);
        }
    }

    stopSound() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.currentPosition = 0;
            this.isPlaying = false;
            this.updatePlayButtonStates();
        }
    }

    handleTrackEnd() {
        this.isPlaying = false;
        this.updatePlayButtonStates();
        if (this.currentSurahIndex < names.length - 1) {
            this.playNext();
        }
    }

    updateProgressBar() {
        if (!this.currentlyPlayingElement) return;

        const progressBar = this.currentlyPlayingElement.querySelector('.progress-bar');
        const currentTime = this.currentlyPlayingElement.querySelector('.current-time');
        const duration = this.currentlyPlayingElement.querySelector('.duration');

        if (this.audio.duration) {
            const percent = (this.audio.currentTime / this.audio.duration) * 100;
            progressBar.style.width = `${percent}%`;

            if (currentTime) {
                currentTime.textContent = this.formatTime(this.audio.currentTime);
            }
            if (duration) {
                duration.textContent = this.formatTime(this.audio.duration);
            }
        }
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        if (hours > 0) {
            return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        } else {
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
    }

    seekToPosition(e, progressContainer) {
        if (!this.audio || !this.currentlyPlayingElement) return;

        const rect = progressContainer.getBoundingClientRect();
        // Calculate position correctly for RTL layout
        const pos = (rect.right - e.clientX) / rect.width;
        this.audio.currentTime = pos * this.audio.duration;
    }

    setVolume(volume) {
        this.volume = volume;
        if (this.audio) {
            this.audio.volume = volume;
        }
    }

    updatePlayButtonStates(element = null) {
        const targetElement = element || this.currentlyPlayingElement;
        if (!targetElement) return;

        const playBtn = targetElement.querySelector('.play');
        const pauseBtn = targetElement.querySelector('.pause');

        if (playBtn) playBtn.style.display = this.isPlaying ? 'none' : 'block';
        if (pauseBtn) pauseBtn.style.display = this.isPlaying ? 'block' : 'none';
    }

    createSoundElement(surahName, index) {
        const soundUrl = this.getSurahUrl(index + 1);
        const playCount = this.getPlayCount(surahName);

        const soundElement = document.createElement('div');
        soundElement.className = 'sound';
        soundElement.innerHTML = `
            <h1>${surahName}</h1>
            <p>القارئ: ${this.currentReciter.name}</p>
            <p class="play-count">تم التشغيل: ${playCount} مرة</p>
            <div class="audio-controls">
                <div class="progress-container">
                    <div class="progress-bar"></div>
                    <div class="time-display">
                        <span class="current-time">0:00</span> / <span class="duration">0:00</span>
                    </div>
                </div>
                <div class="controls">
                    <div class="plays">
                        <button class="play" aria-label="تشغيل سورة ${surahName}">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="currentColor">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                            </svg>
                        </button>
                        <button class="pause" aria-label="إيقاف سورة ${surahName} مؤقتا" style="display:none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24" fill="currentColor">
                                <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
                            </svg>
                        </button>
                        <button class="stop" aria-label="إيقاف سورة ${surahName}">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24" fill="currentColor">
                                <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="SkipBtn">
                        <button class="previous" aria-label="السورة السابقة">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                                <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/>
                            </svg>
                        </button>
                        <button class="next" aria-label="السورة التالية">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="AudioVolume">
                        <div class="slider">
                            <button class="volume-btn" aria-label="تحكم في الصوت">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24">
                                    <path
                                        d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z" />
                                </svg>
                            </button>
                            <input type="range" class="volume-slider" min="0" max="1" step="0.1" value="1">
                        </div>
                        <a href="${soundUrl}" download="${surahName}-${this.currentReciter.name}.mp3" class="download" aria-label="تحميل سورة ${surahName}">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;

        const playBtn = soundElement.querySelector('.play');
        const pauseBtn = soundElement.querySelector('.pause');
        const stopBtn = soundElement.querySelector('.stop');
        const nextBtn = soundElement.querySelector('.next');
        const prevBtn = soundElement.querySelector('.previous');
        const volumeSlider = soundElement.querySelector('.volume-slider');
        const progressContainer = soundElement.querySelector('.progress-container');

        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.playSound(soundUrl, index, soundElement);
        });

        pauseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.pauseSound();
        });

        stopBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.stopSound();
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.playNext();
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.playPrevious();
        });

        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                this.setVolume(e.target.value);
            });
        }

        if (progressContainer) {
            progressContainer.addEventListener('click', (e) => {
                this.seekToPosition(e, progressContainer);
            });
        }

        return soundElement;
    }

    ShowAllSurahsSounds() {
        SoundsDisplay.innerHTML = '';
        names.forEach((name, index) => {
            const soundElement = this.createSoundElement(name, index);
            SoundsDisplay.appendChild(soundElement);
        });
        ClearsSounds.disabled = false;
    }

    SearchByPartialName(partialName) {
        SoundsDisplay.innerHTML = '';
        const filteredNames = names.filter(name =>
            name.includes(partialName.trim())
        );

        if (filteredNames.length === 0) {
            findoff("لا توجد سور مطابقة للبحث", "تنبيه");
            return;
        }

        filteredNames.forEach((name) => {
            const index = names.indexOf(name);
            const soundElement = this.createSoundElement(name, index);
            SoundsDisplay.appendChild(soundElement);
        });
        ClearsSounds.disabled = false;
    }

    viewShoukhSoundsName() {
        ShekhSoundsDisplay.innerHTML = '';
        this.ShekhSounds.forEach(shekh => {
            const li = document.createElement('li');
            li.textContent = shekh.name;
            li.dataset.value = shekh.value;
            li.addEventListener('click', () => {
                this.setReciter(shekh.value);
                this.ShowAllSurahsSounds();
            });
            ShekhSoundsDisplay.appendChild(li);
        });
    }

    setReciter(reciterValue) {
        const selectedReciter = this.ShekhSounds.find(r => r.value === reciterValue);
        if (selectedReciter) {
            this.currentReciter = selectedReciter;
            return true;
        }
        return false;
    }

    clearSounds() {
        this.stopSound();
        SoundsDisplay.innerHTML = '';
        ClearsSounds.disabled = true;
    }
}

const player = new SoundPlayer();

document.querySelector(".SoundInputWrapper").addEventListener("submit", e => {
    e.preventDefault();
    const searchTerm = soundFinder.value.trim();
    if (searchTerm) {
        player.SearchByPartialName(searchTerm);
    } else {
        player.ShowAllSurahsSounds();
    }
});

ShowAllSurahsSounds.addEventListener("click", () => player.ShowAllSurahsSounds());
ClearsSounds.addEventListener("click", () => player.clearSounds());
OpenShoukhSoundDialog.addEventListener("click", () => { ShoukhSoundDialog.showModal() })
player.viewShoukhSoundsName();

window.player = player;

const names = [
    "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة",
    "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
    "هود", "يوسف", "الرعد", "إبراهيم", "الحجر",
    "النحل", "الإسراء", "الكهف", "مريم", "طه",
    "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان",
    "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
    "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر",
    "يس", "الصافات", "ص", "الزمر", "غافر",
    "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية",
    "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
    "الذاريات", "الطور", "النجم", "القمر", "الرحمن",
    "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
    "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق",
    "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
    "نوح", "الجن", "المزمل", "المدثر", "القيامة",
    "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
    "التكوير", "الإنفطار", "المطففين", "الإنشقاق", "البروج",
    "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
    "الشمس", "الليل", "الضحى", "الشرح", "التين",
    "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
    "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل",
    "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
    "المسد", "الإخلاص", "الفلق", "الناس"
];

function findoff(msg = "", header = "") {
    const alert1 = document.querySelector(".alert1");
    const alertText = document.querySelector(".alert1text");
    const alertHeader = document.querySelector(".alertheader");

    if (alert1 && alertText && alertHeader) {
        alert1.showModal();
        alertText.textContent = msg;
        alertHeader.textContent = header;
    }
}