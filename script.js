//  S T A R T 

// grab vars
var currentDay = $("#currentDay");
var nowHours = luxon.DateTime.local().toObject().hour;
var titleTime = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: "2-digit", minute: "2-digit"});

// grabs button class
var saveBtns = $(".saveBtn");

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
// update the colors 
updateColors(nowHours);

// make buttons clickable and save inputs to local storage
saveBtns.on("click", function(){
    // gets the hours of the event of the inputText
    var eventHour = $(this).parent().attr("id") + ":00";
    // gets the value of the input text in the text area
    var inputText = $(this).prev().val();
    // set local storage
    localStorage.setItem(eventHour, inputText);
    

});

function updateEvents() {
    var timeBlockHours = $(".hour");
    // loop through each hours, XX:XX format
    timeBlockHours.each(function() {
        // get string eventHour
        var eventHour = $(this).text();
        // get storedEvent of each eventHour
        var storedEvent = localStorage.getItem(eventHour);
        // check if var storedEvent is not empty, if not --> 
        // set textarea sibling to the value of eventHour in storage
        if (storedEvent !== null) {
            $(this).siblings(0).val(storedEvent);
             }
        }
)};

// update the events, called upon load/refresh
 updateEvents()


    



