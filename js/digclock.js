// Create a time data function
function currentTime() {
    // Declare variables
    var d = new Date();            // Get current date
    var hr = d.getHours();         // Get current hours
    var min = d.getMinutes();      // Get current minutes
    var sec = d.getSeconds();      // Get current seconds
    var ampm;                      // Declare empty variable to store AM or PM
    var utchr = d.getUTCHours();   // GMT hour
    var timeDiff = utchr - hr;     // GMT - Local
    var adjTimeDiff = Math.abs(timeDiff); // convert negative to positive
    var timeZone;                  // PT, MT, CT, ET

    // Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    // Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    // Determine AM or PM string + convert military hour to regular hour
    if (hr == 12) {
        ampm = "PM";               // Set to PM
    } else if (hr > 12) {
        hr -= 12;                  // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM";               // Set to PM
    } else {
        ampm = "AM";               // Set to AM
    }

    if (adjTimeDiff === 7 || adjTimeDiff === 8) {
        timeZone = "PT";
    } else if (adjTimeDiff === 6 || adjTimeDiff === 7) {
        timeZone = "MT";
    } else if (adjTimeDiff === 5 || adjTimeDiff === 6) {
        timeZone = "CT";
    } else if (adjTimeDiff === 4 || adjTimeDiff === 5) {
        timeZone = "ET";
    } else {
        timeZone = ""; // outside the four zones
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    // Display current local time on HTML element
    document.getElementById("clock").innerText = time; // adding time
}

// Initial run of time data function + repeat every second
currentTime();                        // run once immediately
setInterval(currentTime, 1000);       // setting timer (1000 ms = 1s)