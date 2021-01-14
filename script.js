$(document).ready(function () {

    // WHEN the page first loads:
    // THEN it needs to update to current date and time.
    //  --Moment()
    var now = moment().format('MMMM Do YYYY'); //for calendar date at the top of page
    var whichHour = moment().format("H"); //for checking past, present, future of each hour-block in work-planner
    console.log(now);
    console.log(whichHour);

    var $todaysDate = $("#currentDay");
    $todaysDate.text(now);

    // Create empty string vars that correspond to all hours on the daily planner
    var hour8 = "";
    var hour9 = "";
    var hour10 = "";
    var hour11 = "";
    var hour12 = "";
    var hour13 = "";
    var hour14 = "";
    var hour15 = "";
    var hour16 = "";
    var hour17 = "";

var hourInput = $("input");

// WHEN current date and time is set...
// THEN the app needs to check what calendar hours are in the past, present, and future and color code accordingly.
//  --get date and time (specifically, hour) from Moment()
//  --check each time-block/hour for past, present, or future
//  --set attributes for style/color
var j=8;
for (i=0; i < hourInput.length; i++) {
    console.log(whichHour);
    if (j == whichHour) {
    $(hourInput[i]).addClass("present");
    }
        else if (j < whichHour) {
            $(hourInput[i]).addClass("past");
        }
            else {
                $(hourInput[i]).addClass("future");
            }
    j++;
}

    // WHEN time-blocks are colored...
    // THEN the app needs to check local storage and load the users saved items onto the calendar.
    //  --get local storage (keys and values).
    //  --append key values to their assigned description/time-blocks

    // WHEN user clicks the save button...
    // THEN the app needs to save user entry to local storage
    //  --Listen for click event on save button
    //  --set local storage (key and value) --> STORE BOTH TIME AND DESCRIPTION SO THAT NEXT APPEND KNOWS WHAT AND WHERE
    //      --maybe need to start by creating an object that has hourblocks and values for each...is that what I want to store?  Look at activity 1.
    //          --when setting the object local storage use JSON.stringify.  When retrieving get JSON.parse.

});