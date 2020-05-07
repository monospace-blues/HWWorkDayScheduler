# HWWorkDayScheduler

This is a planner for the 6th Homework assignment.

## index.html
For the front page, there is the header as well as 12 boxes for the plan ahead. In each box, there is a value that is unique to each box, determined by the time. (9am === 9, 10am === 10,... 1pm === 13, 2pm === 14). This value will let the javascript know whether to block text or not and decide on the color.

## script.js
It begins with setting a variable to a Date() method to get the local time (Central Time). I also use two arrays to pull strings of the days and months and display it to the page.

After that, I set up the local storage to pull from it immediately if there is something there. I made sure to check for all dates based on the 9-5 time period. It goes through all times and if there is something in it, we put the information saved to the webpage.

We then check the time to see whether or not we can access and type inside that box. We get the hour using Date().Hour and check and compare to the value of the box (ex: 2pm, data-time = 14). If the hour is less than the time, we disable the text value and change the color of the text-box. If it matches, we just set the color to red, and if it more than the time, we make it green.

For the button click event, we just listen, check which div box it was and using the DOM we set the text inside that box and save it to Local storage.
