
var currentDay = $("#currentDay");
var now = luxon.DateTime.local();
console.log(now);
var titleTime = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });
console.log(titleTime);
var workdayHours = [06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22];

// populate more than one hour
for (i=0; i<workdayHours.length; i++) {
    var timeblock = 3
}

// make hour blocks hoverable

// show times in left column

// show events in each time block

// color code blocks according to time
    // past = grey
    // current = red
    // upcoming = green

// get current time and put it below the jumbotron

// click right column button to edit middle column texts
    // once to edit
    // again to save to local storage
