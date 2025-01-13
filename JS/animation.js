const dialogs = document.querySelectorAll("dialog");

dialogs.forEach(dialog => {
    dialog.addEventListener('close', () => { dialog.classList.remove('open') });

    document.querySelectorAll("#open-button").forEach(openBtn => {
        openBtn.addEventListener("click", () => {
            dialog.showModal();
            setTimeout(() => dialog.classList.add('open'));
        });
    })

    document.querySelectorAll("#close-button").forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            const close = dialog.close() || dialog.removeEventListener('transitionend', close);
            dialog.addEventListener('transitionend', close);
            dialog.classList.remove('open');
        });
    })
})