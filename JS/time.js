const hour_Minutes = document.querySelector(".hour_Minutes")
const time_sub_text = document.querySelector(".time-sub-text")
const day_text = document.querySelector(".day-text")
const day_night_sign = document.querySelector(".dayornight")

function Make_Hour_Minutes() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    hour_Minutes.textContent = `${formattedHours}:${formattedMinutes}`;
    time_sub_text.textContent = `${ampm}`

    // check if it day or night
    if (hours >= 6 && hours < 18) { // day
        day_night_sign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" stroke-width="0" fill="currentColor" stroke="currentColor" class="sun"><path fill="#FFF" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"><circle cx="256" cy="256" r="80" fill="#FFF" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></svg>`
    } else { // night
        day_night_sign.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" stroke-width="0" fill="currentColor" stroke="currentColor" class="moon"><path fill="#FFF" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>`
    }
}

function Make_Date() {
    const months = {
        1: "Junuary",
        2: "Februry",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "Augest",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    }

    const days = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday",
    }

    function check(OrderOfMonth) {
        if (OrderOfMonth == 1) {
            return OrderOfMonth + "st"
        }
        else if (OrderOfMonth == 2) {
            return OrderOfMonth + "nd"
        }
        else if (OrderOfMonth == 3) {
            return OrderOfMonth + "rd"
        }
        else {
            return OrderOfMonth + "th"
        }
    }

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;

    Object.keys(months).forEach(key1 => {
        Object.keys(days).forEach(key2 => {
            if (key1 == month) {
                const newMonth = months[key1];
                const newDays = days[key2];
                day_text.textContent = `${newDays}, ${newMonth} ${check(day)}`
            }
        })
    })
}

Make_Hour_Minutes()
Make_Date()

setInterval(Make_Hour_Minutes, 1000)
setInterval(Make_Date, 1000)