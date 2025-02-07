document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    } if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
        return false;
    }
    if (e.key == "Escape") {
        return false;
    }
}

// Function to update the body class based on the "darked" value
function updateDarkMode() {
    const darked = localStorage.getItem('darked');
    if (darked === 'true') {
        document.body.classList.add('dark'); // Add "dark" class if darked is true
        console.log('Added "dark" class to body');
    } else {
        document.body.classList.remove('dark'); // Remove "dark" class if darked is false
        console.log('Removed "dark" class from body');
    }
}

// Function to set the "darked" value in localStorage
function setDarkMode(isDark) {
    localStorage.setItem('darked', isDark); // Set "darked" to true or false
}

// Listen for changes in other documents (tabs/windows)
window.addEventListener('storage', (event) => {
    if (event.key === 'darked') {
        console.log('darked changed in another document:');
        console.log('Old Value:', event.oldValue);
        console.log('New Value:', event.newValue);
        updateDarkMode(); // Update body class based on the new value
    }
});

// Override localStorage methods to detect changes in the same document
const originalSetItem = localStorage.setItem;
const originalRemoveItem = localStorage.removeItem;
const originalClear = localStorage.clear;

localStorage.setItem = function (key, value) {
    const oldValue = localStorage.getItem(key);
    originalSetItem.apply(this, arguments);
    if (key === 'darked') {
        triggerChangeEvent(key, oldValue, value);
    }
};

localStorage.removeItem = function (key) {
    const oldValue = localStorage.getItem(key);
    originalRemoveItem.apply(this, arguments);
    if (key === 'darked') {
        triggerChangeEvent(key, oldValue, null);
    }
};

localStorage.clear = function () {
    const oldStorage = { ...localStorage };
    originalClear.apply(this, arguments);
    if (oldStorage.darked !== undefined) {
        triggerChangeEvent('darked', oldStorage.darked, null);
    }
};

// Function to trigger a custom event
function triggerChangeEvent(key, oldValue, newValue) {
    const event = new CustomEvent('localStorageChange', {
        detail: { key, oldValue, newValue },
    });
    window.dispatchEvent(event);
}

// Listen for custom localStorageChange event
window.addEventListener('localStorageChange', (event) => {
    if (event.detail.key === 'darked') {
        console.log('darked changed in the same document:');
        console.log('Old Value:', event.detail.oldValue);
        console.log('New Value:', event.detail.newValue);
        updateDarkMode(); // Update body class based on the new value
    }
});

// Initial check when the page loads
updateDarkMode();