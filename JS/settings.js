document.addEventListener('DOMContentLoaded', function () {
    // --- DOM Elements ---
    const changeNameBtn = document.querySelector('.ChangeName');
    const userNameDialog = document.querySelector('.User_Name');
    const nameInput = document.querySelector('.NameInput');
    const nameSubmit = document.querySelector('.NameSubmit');

    if (!localStorage.getItem('userName')) userNameDialog.showModal();

    changeNameBtn.addEventListener('click', () => userNameDialog.showModal());

    nameSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        const newName = nameInput.value.trim();
        if (newName) {
            localStorage.setItem('userName', newName);
            userNameDialog.close();
            nameInput.value = '';
        } else {
            nameInput.setCustomValidity('الرجاء إدخال اسم صحيح (حرفين على الأقل)');
            nameInput.reportValidity();
        }
    });

    // --- Content Filtering/Preferences (Audio Section) ---
    // Assuming these elements exist in index.html (as discussed previously)
    const reciterFilter = document.getElementById('reciter-filter');
    // The .sounds container is likely managed by sound.js. We'll interact with the global `sounds` array if possible.

    // We need to wait for sound.js to load and populate the `sounds` array.
    // A simple way is to check periodically or rely on sound.js calling a function when ready.
    // Let's assume sound.js defines a global `sounds` array and calls `displaySounds(soundsArray)`.

    function getUniqueReciters(soundsArray) {
        // Adjust 'reciter' property name if different in your sound.js data structure
        const reciters = [...new Set(soundsArray.map(sound => sound.reciter || 'غير محدد'))];
        return reciters.sort(); // Sort alphabetically
    }

    // Populate the filter dropdown
    function populateReciterFilter() {
        // Ensure sound.js has loaded and `window.sounds` is available
        if (typeof window.sounds !== 'undefined' && window.sounds && window.sounds.length > 0) {
            console.log("[SettingsJS] Populating reciter filter.");
            const uniqueReciters = getUniqueReciters(window.sounds);
            if (reciterFilter) {
                reciterFilter.innerHTML = '<option value="all">الكل</option>'; // Clear and add 'All'
                uniqueReciters.forEach(reciter => {
                    const option = document.createElement('option');
                    option.value = reciter;
                    option.textContent = reciter;
                    reciterFilter.appendChild(option);
                });

                // Add event listener to filter
                reciterFilter.addEventListener('change', function () {
                    filterAndDisplaySounds();
                });

                // Initial filter application might be handled by sound.js on load,
                // or we can trigger it once if needed after population.
                // filterAndDisplaySounds(); // Uncomment if needed here
            } else {
                console.warn("[SettingsJS] Reciter filter dropdown not found in DOM.");
            }
        } else {
            // console.log("[SettingsJS] Sounds array not ready yet, retrying in 500ms..."); // Reduce log spam
            setTimeout(populateReciterFilter, 1000); // Retry less frequently
        }
    }

    // Filter and display sounds based on selected reciter
    function filterAndDisplaySounds() {
        // Ensure dependencies are met
        if (typeof window.sounds === 'undefined' || !window.sounds || typeof window.displaySounds !== 'function') {
            return;
        }

        if (!reciterFilter) {
            return;
        }

        const selectedReciter = reciterFilter.value;
        let filteredSounds;
        console.log(`[SettingsJS] Filtering sounds by reciter: ${selectedReciter}`);
        if (selectedReciter === 'all') {
            filteredSounds = window.sounds; // Show all
            console.log("[SettingsJS] Showing all sounds.");
        } else {
            // Filter based on the 'reciter' property (adjust if different)
            filteredSounds = window.sounds.filter(sound => (sound.reciter || 'غير محدد') === selectedReciter);
            console.log(`[SettingsJS] Found ${filteredSounds.length} sounds for reciter '${selectedReciter}'.`);
        }
        // Call the existing function from sound.js to display sounds, passing the filtered array
        window.displaySounds(filteredSounds);
    }

    // Start populating the reciter filter once DOM is loaded
    // sound.js might also trigger this after it finishes loading its data
    if (reciterFilter) { // Only try if the element exists
        populateReciterFilter();
    }

    // --- Other Event Listeners (Kept as is) ---
    nameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            nameSubmit.click();
        }
    });

    userNameDialog.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && localStorage.getItem('userName')) {
            e.preventDefault();
            userNameDialog.close();
        }
    });
});
// --- End UI Feedback Functions ---