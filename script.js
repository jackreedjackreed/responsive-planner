
var currentDay = $("#currentDay");
//var now = luxon.DateTime.local();
//console.log(now);
var nowHours = luxon.DateTime.local().toObject().hour;
//console.log(nowHours);
var titleTime = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: "2-digit", minute: "2-digit"});
//console.log(titleTime);
var scheduleClass = $(".schedule");
var workdayHours = [09, 10, 11, 12, 13, 14, 15, 16, 17];

// get current time and put it below the jumbotron
currentDay.text(titleTime);

// color code blocks according to time
function updateColors (currentTimeHours) {
    $(".time-block").each(function () {
        // go through all elements w/ time-block class and check id against currentTimeHours
        if ($(this).attr("id") < currentTimeHours) {
            // past = grey
            $(this).addClass("past");
        }
        else if ($(this).attr("id") == currentTimeHours) {
            // current = red
            $(this).addClass("present");
        }
        else {
            // future = green
            $(this).addClass("future");
        }
    })
}
updateColors(nowHours);

// set time blocks to have empty text
scheduleClass.text("");

// make time blocks clickable 
$(".schedule").on("click", function() {
    // console.log("clicked");
    // allow user to type inputs 
    var inputBox = $('<input type="text" class="userinput">').appendTo($(this));
});

// show events in each time block



    // upon clicking save button, user input gets saved to local storage





    



