$("document").ready(function () {});
    // moment().format();

    var hour1 = "";

    var storeOne = "Hello";

    localStorage.setItem("storeOne", storeOne);
    localStorage.getItem("storeOne");

    // WHEN the page first loads:
    // THEN it needs to update to current date and time.
    //  --Moment()

    // WHEN current date and time is set...
    // THEN the app needs to check what calendar hours are in the past, present, and future and color code accordingly.
    //  --get date and time (specifically, hour) from Moment()
    //  --check each time-block/hour for past, present, or future
    //  --set attributes for style/color

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
