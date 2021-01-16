$(document).ready(function () {

    // Accessing moment.js to capture current time/date.
    var now = moment().format('MMMM Do YYYY'); //for calendar date at the top of page
    var whichHour = moment().format("H"); //for checking past, present, future of each hour-block in work-planner
    var exactTime = moment().format("h:mm:ss")
    
    // added this, but not using; purpose was to be a trigger value for resetting calendar items at midnight
    // not practical unless data is being stored on an always running server (so here for exercise, not functionality)
    // see notes on commented-out code block at bottom of script
    var midNight = "00:00:00";

    // Assigning moment.js date to top of calendar
    var $todaysDate = $("#currentDay");
    $todaysDate.text(now);


    // Loop created to do two things:  
        // color code the calendar time blocks based on past, present, future status
        // load local storage items for each time block

        var hourInput = $("input");

        // color coding
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
            
        // local storage retrieval
            var task = JSON.parse(localStorage.getItem(j));
            if (task) {
                $(hourInput[i]).val(task);
            }
            j++;
        }

        // listening for a button click to trigger a local storage assignment
        $("button").on("click", function(event) {
            event.preventDefault();
            
            // identifying which button has been clicked
            var whichBtn = event.target

            // assigning the input text to variable "task"
            var task = $(whichBtn).parent().siblings("input").val().trim();

            // returning the button id so that we can see which hour is being referred to.
            // splitting off text so that just the hour indicator in button id can be used as local storage key.
            var hour = $(whichBtn).attr("id").split("saveBtn")[1];
            
            // saving the tast description to local storage with "hour" as the key and "task" as value
            localStorage.setItem(hour, JSON.stringify(task));
        });

});

// The calendar is, by design, only showing the current day's calendar items.
// In the real world, storage of calendar items would need to be cleared at midnight every day.
// If this code was constantly running on a server, I would be using the following code block to clear calendar at midnight.
// for emptying calendar items
// if (exactTime === midnight) {
    //     localStorage.clear();
    //     location.reload();
    // }
