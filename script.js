
var currentDay = $("#currentDay");
//var now = luxon.DateTime.local();
//console.log(now);
var nowHours = luxon.DateTime.local().toObject().hour;
//console.log(nowHours);
var titleTime = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: "2-digit", minute: "2-digit"});
//console.log(titleTime);

// grabs schedule class
var scheduleClass = $(".schedule");

var saveBtns = $(".saveBtn");
// ^ grabs button class


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


// show events in each time block
 // upon clicking save button, user input gets saved to local storage

// save to local storage function
function saveToLS(eventHour, userInput) {
    var textAreaInput = $(this);
    console.log(textAreaInput);
    localStorage.setItem(eventHour, userInput);
    console.log(userInput);
}

saveBtns.on("click", function(){
    // gets the value of the input text in the text area
    var inputText = $(this).prev().val();
    console.log(inputText);
    var eventHour = $(this).parent().attr("id");
    console.log(eventHour);

    saveToLS(inputText);
});

    



