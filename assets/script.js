// creating the date string to display at the start of the day planner
var dateMethod = new Date();

// Since the Date() method uses numbers for all parameters (hour, day, month, year, time, etc)
// we'll use an array that we can access and add words to our string
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// hour is set to var hour
// we'll be using this a lot...
var hour = dateMethod.getHours();

// Display example: "Thursday, September 20"
var timeString = days[dateMethod.getDay() - 1] + ", " + months[dateMethod.getMonth()] + " " + dateMethod.getDate();
// add to our html file
$("#date").text(timeString);
console.log(timeString);




$(document).ready(function() {
    
    // Local Storage

    // ideas: use a for loop to go through all classes then push the text values inside each class
    // let's try it out
    var time = ["9am","10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    for (var i = 0; i < time.length; i++){
        // access our jQuery element with this string
        var textEl = "#" + time[i];
        // get localStorage text and put it in a variable
        var textLS = localStorage.getItem(time[i]);
        // put text inside our boxes, thus it is initialized
        $(textEl).children(".textPlan").children().text(textLS);
    }

    // Date
    // ideas: use a for loop to check whether we should disable the textarea

    // we'll use the time array as a limit for the for loop
    for (var i = 0; i < time.length; i++){
        // console.log(dateMethod.getHours());

        // access our jQuery element with the textEl string ex: "#2pm"
        var textEl = "#" + time[i];

        // What to do when we get our attributes...
        // if the data-time attr is less than the hour,
        // disable the text!
        if (hour >  $(textEl).attr("data-time")) {
            $(textEl).children(".textPlan").children().attr("disabled", "disabled");
            $(textEl).children(".textPlan").children().addClass("colorGrey");

        } 
        // if the data-time matches the hour,
        // make it available and red
        else if (hour === parseInt($(textEl).attr("data-time"))) {
            $(textEl).children(".textPlan").children().addClass("colorRed");
        } 
        // if it doesn't match it, then turn it green...
        else {
            $(textEl).children(".textPlan").children().addClass("colorGreen");
        }
        
        
    }

    
    // Button Event Listener  
    // dealing with text values and saving them
    var saveButton = $("button");
    
    saveButton.on("click", function(event){
        // make it a habit
        event.preventDefault();

        // if a button gets clicked
        if (event.target.matches("button")){
            // search through the DOM and find the text (button's sibling => children (textarea) => get text value)
            var texting = $(this).siblings(".textPlan").children().val().trim();
            
            // searches and gets the value of the parent ID!!
            var thatVal = $(this).parent().attr("id");

            // to prevent any button clicks creating something in local storage,
            // if it's past the hour, we'll just do nothing with the button click
            if (hour > $(this).parent().attr("data-time")){
                return;
            } else {
                // set (create) the string to local storage
                localStorage.setItem(thatVal, texting);
            }
        }

    });

});