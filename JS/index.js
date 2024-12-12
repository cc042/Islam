window.onload = () => {
    document.querySelector(".Load").close();
}

document.addEventListener('contextmenu', function (e) {
    // e.preventDefault();
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

// moshaf error alert
document.querySelector(".alert1").addEventListener("click", () => {
    document.querySelector(".alert1").showModal()
    document.querySelector(".alert1 h1").innerHTML = "الرجاء, الضغط على اى من هذه السور لعرضها"
})

document.querySelector(".exitalert1").addEventListener("click", () => {
    document.querySelector(".alert1").close()
})