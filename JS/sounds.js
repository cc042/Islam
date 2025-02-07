let currentAudio = null; // To track the currently playing audio
let currentlyPlayingButton = null; // To track the currently active play button

function playSurah(url, clickedButton) {
	if (currentAudio && currentAudio.src !== url) {
		// If a new URL is clicked, stop the current audio and create a new one
		currentAudio.pause();
		currentAudio = new Audio(url); // Create a new Audio object with the new URL
		currentAudio.play();
		if (currentlyPlayingButton) {
			currentlyPlayingButton.disabled = false; // Re-enable the previously playing button
		}
		currentlyPlayingButton = clickedButton; // Set the currently playing button
		clickedButton.disabled = true; // Disable the clicked button
	} else if (currentAudio && currentAudio.paused) {
		// If the audio is paused, resume it
		currentAudio.play();
		currentlyPlayingButton = clickedButton; // Set the currently playing button
		clickedButton.disabled = true; // Disable the clicked button
	} else if (currentAudio && !currentAudio.paused) {
		// If the audio is playing, pause it
		currentAudio.pause();
		if (currentlyPlayingButton) {
			currentlyPlayingButton.disabled = false; // Re-enable the currently playing button
		}
		currentlyPlayingButton = null; // Reset the currently playing button
	} else {
		// If no audio is playing, create a new Audio object and play it
		currentAudio = new Audio(url);
		currentAudio.play();
		currentlyPlayingButton = clickedButton; // Set the currently playing button
		clickedButton.disabled = true; // Disable the clicked button
	}
}

function pauseSurah() {
	if (currentAudio && !currentAudio.paused) {
		currentAudio.pause(); // Pause the audio
		if (currentlyPlayingButton) {
			currentlyPlayingButton.disabled = false; // Re-enable the currently playing button
			currentlyPlayingButton = null; // Reset the currently playing button
		}
	}
}