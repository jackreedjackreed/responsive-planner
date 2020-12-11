
var currentDay = $("#currentDay");
//var now = luxon.DateTime.local();
//console.log(now);
var nowHours = luxon.DateTime.local().toObject().hour;
//console.log(nowHours);
var titleTime = luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit', hour: "2-digit", minute: "2-digit"});
//console.log(titleTime);
var scheduleClass = $(".schedule");
// ^ grabs schedule class
var inputtext = scheduleClass.val();
console.log(scheduleClass.val());
// ^ grabs value of text for schedule class
// var workdayHours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
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
updateColors(nowHours);

// set time blocks to have empty text


// show events in each time block
 // upon clicking save button, user input gets saved to local storage

// save to local storage function
function saveToLS(userinput) {
    var inputtext = scheduleClass.val();
    console.log(inputtext);
}

saveBtns.on("click", function(){
    // console.log("banana");
    console.log($(this).prev().val());
    // if (scheduleClass.value !== "") {
    //     console.log($(scheduleClass.clientHeight));
    // }
    //console.log($(this).inputtext);
    //saveToLS(inputtext);
});

    



