$(document).ready(function () {

    // WHEN the page first loads:
    // THEN it needs to update to current date and time.
    //  --Moment()
    var now = moment().format('MMMM Do YYYY'); //for calendar date at the top of page
    var whichHour = moment().format("H"); //for checking past, present, future of each hour-block in work-planner
    var exactTime = moment().format("h:mm:ss")
    var midNight = "00:00:00";
    console.log(now);
    console.log(whichHour);
    console.log(exactTime);

    var $todaysDate = $("#currentDay");
    $todaysDate.text(now);

    // Create empty string vars that correspond to all task inputs on the daily planner

    var schedule8 = "";
    var schedule9 = "";
    var schedule10 = "";
    var schedule11 = "";
    var schedule12 = "";
    var schedule13 = "";
    var schedule14 = "";
    var schedule15 = "";
    var schedule16 = "";
    var schedule17 = "";

    // WHEN time/date is loaded...
    // THEN check local storage for tasks that match date and hour blocks.
    // --Only post those that match current date, otherwise clear from storage.

    init();
    function init() {

        var schedule8 = JSON.parse(localStorage.getItem("schedule8"));
        $("#input8").val(schedule8);

        // WHEN current date and time is set...
        // THEN the app needs to check what calendar hours are in the past, present, and future and color code accordingly.

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

        // WHEN user clicks the save button...
        // THEN write tasks to local storage with their proper time-block.

        $("button").on("click", function (event) {
            event.preventDefault();
            // localStorage.removeItem("schedule8");
            var task8 = $("#input8").val().trim();
            // userTasks.push(task8);

            localStorage.setItem("schedule8", JSON.stringify(task8));
        });


    }
});


// var Save8 = $("#saveBtn8");
// var Save9 = $("#saveBtn9");
// var Save10 = $("#saveBtn10");
// var Save11 = $("#saveBtn11");
// var Save12 = $("#saveBtn12");
// var Save13 = $("#saveBtn13");
// var Save14 = $("#saveBtn14");
// var Save15 = $("#saveBtn16");
// var Save16 = $("#saveBtn16");
// var Save17 = $("#saveBtn17");

// var task9text = $("#input9").val().trim();
// var task10text = $("#input10").val().trim();
// var task11text = $("#input11").val().trim();
// var task12text = $("#input12").val().trim();
// var task13text = $("#input13").val().trim();
// var task14text = $("#input14").val().trim();
// var task15text = $("#input15").val().trim();
// var task16text = $("#input16").val().trim();
// var task17text = $("#input17").val().trim();