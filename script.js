
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


function updateEvents() {
    var timeBlocks = $(".time-block");
    console.log(timeBlocks + "timeblocks");
    var timeBlocksID = timeBlocks.attr("id");
    console.log(timeBlocksID + "timeblocksid");
    var timeBlockTextArea = timeBlocks.children([1]);
    console.log(timeBlockTextArea + "timeBlockTextArea");
    var storedEvent = localStorage.getItem(timeBlocksID)
    console.log(storedEvent + "storedevent");
    // here, the stored event comes out correctly --> the correct hour/ID has the correct stored event


    timeBlocksID.each(function() {
        // storedEvent = localStorage.getItem(timeBlocksID);
        // console.log(storedEvent);
        // ^^ all comes back null and i'm not sure why. this is where i got stuck. 
        // THE ONLY THING i can't figure out is how to retrieve and populate the boxes that have stuff in local storage.
        if (storedEvent !== null && ) {
            console.log("not null!");
            $(this).val(storedEvent);
        }
    }
)};

updateEvents()

// save to local storage function
function saveToLS(eventHour, userInput) {
    localStorage.setItem(eventHour, userInput);
    console.log(eventHour);
    console.log(userInput);
}

// make buttons clickable and get parameters for saveToLS fxn
saveBtns.on("click", function(){
    // gets the hour of the event of the inputText
    var eventHour = $(this).parent().attr("id");
    // console.log(eventHour);
    // gets the value of the input text in the text area
    var inputText = $(this).prev().val();
    // console.log(inputText);
    
    saveToLS(eventHour, inputText);

});

    



