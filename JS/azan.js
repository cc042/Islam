var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://api.collectapi.com/economy/currencyToAll?int=10&base=USD");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 7vYK4fTthpxYRuneG1QRrY:1fjWgJ4GcMzMnP3eHMO3TQ");

xhr.send(data);