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
    var Save8 = $("#saveBtn8");
    var Save9 = $("#saveBtn9");
    var Save10 = $("#saveBtn10");
    var Save11 = $("#saveBtn11");
    var Save12 = $("#saveBtn12");
    var Save13 = $("#saveBtn13");
    var Save14 = $("#saveBtn14");
    var Save15 = $("#saveBtn16");
    var Save16 = $("#saveBtn16");
    var Save17 = $("#saveBtn17");

    var task8 = $("#input8")
    var task9 = $("#input9");
    var task10 = $("#input10");
    var task11 = $("#input11");
    var task12 = $("#input12");
    var task13 = $("#input13");
    var task14 = $("#input14");
    var task15 = $("#input16");
    var task16 = $("#input16");
    var task17 = $("#input17");
   
    
    var userTasks = [];

    init();
    function init() {
        var storedSchedule = JSON.parse(localStorage.getItem("userSchedule"));
        if (storedSchedule !== null) {
            userTasks = storedSchedule;
        }
        console.log(userTasks);
    }

    // WHEN current date and time is set...
    // THEN the app needs to check what calendar hours are in the past, present, and future and color code accordingly.
    //  --get date and time (specifically, hour) from Moment()
    //  --check each time-block/hour for past, present, or future
    //  --set attributes for style/color

    var hourInput = $("input");

    var j = 8;
    for (i = 0; i < hourInput.length; i++) {
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

    $("button").on("click", function(event) {
        event.preventDefault();

        var task8text = $(task8).val();
        var task9text = $(task9).val();
        var task10text = $(task10).val();
        var task11text = $(task11).val();
        var task12text = $(task12).val();
        var task13text = $(task13).val();
        var task14text = $(task14).val();
        var task15text = $(task15).val();
        var task16text = $(task16).val();
        // var task17text = $(task17).val();

        // console.log(task17text);
        console.log(task16text);
        
        // localStorage.setItem("userSchedule", JSON.stringify(userTasks));
    });
    // THEN the app needs to save user entry to local storage
    //  --Listen for click event on save button
    //  --set local storage (key and value) --> STORE BOTH TIME AND DESCRIPTION SO THAT NEXT APPEND KNOWS WHAT AND WHERE
    //      --maybe need to start by creating an object that has hourblocks and values for each...is that what I want to store?  Look at activity 1.
    //          --when setting the object local storage use JSON.stringify.  When retrieving get JSON.parse.

});