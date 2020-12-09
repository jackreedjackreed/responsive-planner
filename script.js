
var currentDay = $("#currentDay");
var now = luxon.DateTime.local();
console.log(now);
var titleTime = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: "2-digit", minute: "2-digit"});
console.log(titleTime);
var workdayHours = [06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22];

// get current time and put it below the jumbotron
$("#currentDay").text(titleTime);

// apply timeblock class
//$("#timeblock").addClass("time-block");

// populate more than one hour
for (i=0; i<workdayHours.length; i++) {
    var timeblock = $("#time-block");
    var eventRow = $(".event-row");
    timeblock.text("banana");
    timeblock.addClass("time-block");
    timeblock.addClass("future");
}

// make hour blocks hoverable

// show times in left column

// show events in each time block

// color code blocks according to time
    // past = grey
    // current = red
    // upcoming = green

// time-row
// event-row
// edit-row


// click right column button to edit middle column texts
    // once to edit
    // again to save to local storage

