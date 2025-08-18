document.addEventListener('DOMContentLoaded', function () {
    // --- DOM Elements ---
    const changeNameBtn = document.querySelector('.ChangeName');
    const userNameDialog = document.querySelector('.User_Name');
    const nameInput = document.querySelector('.NameInput');
    const nameSubmit = document.querySelector('.NameSubmit');

    // --- User Name Handling (Kept as is) ---
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
            // console.warn("[SettingsJS] Cannot filter sounds: dependencies not ready."); // Reduce log spam
            return;
        }

        if (!reciterFilter) {
            console.warn("[SettingsJS] Cannot filter sounds: reciter filter dropdown not found.");
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

function showErrorMessage(message, title = "خطأ") {
    const dialog = document.getElementById('customAlertDialog');
    const titleElement = dialog?.querySelector('.custom-alert-title');
    const messageElement = dialog?.querySelector('.custom-alert-message');
    const okButton = dialog?.querySelector('.custom-alert-ok-btn');
    const closeButton = dialog?.querySelector('.custom-alert-close-btn');

    if (!dialog || !titleElement || !messageElement || !okButton || !closeButton) {
        console.error("[SettingsJS] Custom alert dialog elements not found. Falling back to console.error.");
        console.error(message);
        return; // Gracefully handle if dialog elements are missing
    }

    // Set the title and message
    titleElement.textContent = title;
    messageElement.textContent = message;

    // Function to close the dialog
    const closeDialog = () => {
        dialog.close();
        // Remove event listeners to prevent memory leaks if added multiple times
        okButton.removeEventListener('click', onOkClick);
        closeButton.removeEventListener('click', onCloseClick);
        dialog.removeEventListener('close', onCloseClick); // Also remove if closed by backdrop/ESC
    };

    // Event handler for OK button
    const onOkClick = (e) => {
        e.preventDefault(); // Prevent default if button is submit type
        closeDialog();
    };

    // Event handler for Close button and dialog close event (e.g., backdrop click, ESC)
    const onCloseClick = () => {
        closeDialog();
    };

    // Attach event listeners (ensure they are removed in closeDialog)
    okButton.addEventListener('click', onOkClick);
    closeButton.addEventListener('click', onCloseClick);
    // Also listen for the dialog's native 'close' event (covers backdrop click, ESC)
    dialog.addEventListener('close', onCloseClick);

    // Show the dialog
    dialog.showModal();
}


/**
 * Displays a confirmation dialog to the user.
 * @param {string} message - The confirmation message to display.
 * @param {string} [title="تأكيد"] - The title for the dialog.
 * @param {Function} onConfirm - Function to call if user confirms.
 * @param {Function} onCancel - Function to call if user cancels.
 */
function showConfirmDialog(message, title = "تأكيد", onConfirm, onCancel) {
    const dialog = document.getElementById('customConfirmDialog');
    const titleElement = dialog?.querySelector('.custom-confirm-title');
    const messageElement = dialog?.querySelector('.custom-confirm-message');
    const confirmBtn = dialog?.querySelector('.custom-confirm-ok-btn');
    const cancelBtn = dialog?.querySelector('.custom-confirm-cancel-btn');

    if (!dialog || !titleElement || !messageElement || !confirmBtn || !cancelBtn) {
        console.error("[SettingsJS] Custom confirm dialog elements not found. Falling back to window.confirm.");
        // Fallback to native confirm if custom dialog is missing
        if (confirm(message)) {
            if (onConfirm) onConfirm();
        } else {
            if (onCancel) onCancel();
        }
        return;
    }

    // Set the title and message
    titleElement.textContent = title;
    messageElement.textContent = message;

    // Function to close the dialog
    const closeDialog = () => {
        dialog.close();
        // Remove event listeners to prevent memory leaks
        confirmBtn.removeEventListener('click', onConfirmClick);
        cancelBtn.removeEventListener('click', onCancelClick);
        dialog.removeEventListener('close', onClose); // Also remove if closed by backdrop/ESC
    };

    // Event handlers
    const onConfirmClick = (e) => {
        e.preventDefault();
        closeDialog();
        if (onConfirm) onConfirm();
    };

    const onCancelClick = (e) => {
        e.preventDefault();
        closeDialog();
        if (onCancel) onCancel();
    };

    const onClose = () => {
        // If dialog is closed by backdrop/ESC, treat as cancel
        closeDialog();
        if (onCancel) onCancel();
    };

    // Attach event listeners
    confirmBtn.addEventListener('click', onConfirmClick);
    cancelBtn.addEventListener('click', onCancelClick);
    dialog.addEventListener('close', onClose); // Covers backdrop click, ESC

    // Show the dialog
    dialog.showModal();
}
// --- End UI Feedback Functions ---