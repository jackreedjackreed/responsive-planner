//  HI THERE

// I came so close to figuring this one out but was ultimately unable to populate the textareas 
// with the information in local storage. Would LOVE an explanation as to why neither functions worked
// the way I had intended them to.

// Thanks, Jack

var currentDay = $("#currentDay");
//var now = luxon.DateTime.local();
//console.log(now);
var nowHours = luxon.DateTime.local().toObject().hour;
//console.log(nowHours);
var titleTime = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: "2-digit", minute: "2-digit"});
//console.log(titleTime);
var workHours = [09,10,11,12,13,14,15,16,17]

// grabs schedule class
var scheduleClass = $(".schedule");
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

// make buttons clickable and get parameters for saveToLS fxn
saveBtns.on("click", function(){
    // gets the hour of the event of the inputText
    var eventHour = $(this).parent().attr("id") + ":00";
    //console.log(eventHour);
    // gets the value of the input text in the text area
    var inputText = $(this).prev().val();
    //console.log(inputText);

    // trying to save in this fxn instead of saveToLS fsn
    localStorage.setItem(eventHour, inputText);
    
    // saveToLS(eventHour, inputText);

});

function updateEvents() {
    var timeBlockHours = $(".hour");
    timeBlockHours.each(function() {
        var eventHour = $(this).text()
        // console.log(eventHour);
        var storedEvent = localStorage.getItem(eventHour);
        console.log($(this).siblings());
        // console.log(eventHour + storedEvent + " = stored event from storage!");
        // console.log(storedEvent);
        if (storedEvent !== null) {
            // console.log("not null");
            $(this).siblings(0).val(storedEvent);
            
        }
        // ^^ all comes back null and i'm not sure why. this is where i got stuck. 
        // THE ONLY THING i can't figure out is how to retrieve and populate the boxes that have stuff in local storage.
        // if (storedEvent !== null) {
            // console.log("not null!");
            // timeBlocks.children([1]).val(storedEvent);
        }
    // // }
)};

// update the events
 updateEvents()

// var arrayOfKeys = Object.keys(localStorage);
// // console.log(arrayOfKeys);
// var arrayOfValues = Object.values(localStorage);
// // console.log(arrayOfValues);

// // save to local storage function
// function saveToLS(eventHour, userInput) {
//     localStorage.setItem(eventHour, userInput);
//     // console.log(eventHour);
//     // console.log(userInput);
// }

// function updateEvents2() {
//     var timeBlocks = $(".time-block");
//     // console.log(timeBlocks + "timeblocks");
//     var timeBlocksID = timeBlocks.attr("id");
//     // console.log(timeBlocksID + "timeblocksid");
//     var timeBlockTextArea = timeBlocks.children([1]);
//     //var timeBlockTextArea = $(".schedule");
//     // console.log(timeBlockTextArea + "timeBlockTextArea");

//     for (i = 0; i < arrayOfKeys.length; i++) {
//         var valuess = arrayOfValues[i];
//         if (arrayOfKeys[i] !== null) {
//             storedEvent = localStorage.getItem(workHours[i]);
//             // console.log(storedEvent);
//             timeBlockTextArea.val(storedEvent);
//             // I ALSO THOUGHT this would work, but it doesnt. Would love an explanation for either function.
//         }
//     }
// }
// updateEvents2();


// var timeBlocks = $(".time-block");
//     //console.log(timeBlocks + "timeblocks");
//     var timeBlocksID = timeBlocks.attr("id");
//     //console.log(timeBlocksID + "timeblocksid");
//     var timeBlockTextArea = timeBlocks.children[1];
//     //console.log(timeBlockTextArea + "timeBlockTextArea");
//     var storedEvent = localStorage.getItem(timeBlocksID)
//     //console.log(storedEvent + "storedevent");
//     // here, the stored event comes out correctly --> the correct hour/ID has the correct stored event
//     var timeBlockHours = $(".hour")
//     //console.log(timeBlockHours + "timeblockhours");



    



