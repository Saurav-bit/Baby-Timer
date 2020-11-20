var morn = 7;
var lunchTime = 2;
var nap = lunchTime + 2;
var noon = 12;
var even = 18;
var partytime;
var currentTime = function() {
    var clock = document.getElementById("clock");
    var tm = new Date();
    var hr = tm.getHours();
    var min = tm.getMinutes();
    var sec = tm.getSeconds();
    var para = "AM";
    if (hr >= noon) {
        para = "PM";
    }
    if (hr > noon) {
        hr = hr - 12;

    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    var time = hr + ":" + min + ":" + sec + " " + para + "..!!";
    clock.innerText = time;

};
var showTime = function() {
    var nwh = new Date().getHours();
    //console.log(nwh);
    var image = "images/normal.jpg";
    var qt = document.getElementById("txt");
    var quote;
    if (nwh == partytime) {
        image = "images/party.jpg";
        quote = "It's Party Time";
    } else if (nwh == morn) {
        image = "images/wakeup.jpg";
        quote = "Wake Up";
    } else if (nwh == lunchTime) {
        image = "images/lunch.jpg";
        quote = "It's Lunch Time";
    } else if (nwh == nap) {
        image = "images/nap.jpg";
        quote = "It's Nap Time";
    } else if (nwh < noon) {
        image = "images/morning.jpg";
        quote = "Good Morning";
    } else if (nwh >= even) {
        image = "images/evening.jpg";
        quote = "Good Evening";
    } else {
        image = "images/afternoon.jpg";
        quote = "Good Afternoon";
    }

    normal.src = image;
    qt.innerText = quote;

    currentTime();
}





var timer = 1000;
setInterval(showTime, timer);

var partyBtn = document.getElementById("btn");
var PartyEvent = function() {
    if (partytime < 0) {
        partytime = new Date().getHours();
        btn.innerText = "Party Over";
    } else {
        partytime = -1;
        btn.innerText = "Party Time";
    }

};
partyBtn.addEventListener("click", PartyEvent);
PartyEvent();

var wakeup = document.getElementById("wakeup");
var wakeEvent = function() {
    morn = wakeup.value;
};
wakeup.addEventListener("change", wakeEvent);

var lunchup = document.getElementById("lunch");
var lunchEvent = function() {
    lunchTime = lunchup.value;
};
lunchup.addEventListener("change", lunchEvent);

var napup = document.getElementById("nap");
var napEvent = function() {
    nap = napup.value;
};
napup.addEventListener("change", napEvent);