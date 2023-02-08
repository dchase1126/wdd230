let currentYear = new Date();
let year = currentYear.getfullyear();
document.getElementById('currentYear').innerHTML = year;
let currentDay = new Date();
let day = currentDay.getDay();
//if the day is Monday or Tuesday
if (day == 1 || day == 2) {
    document.getElementById('banner').innerHTML =
        ("Come join us for the chamber meet and greet Wednesday at 7:00 p.m.")
}

/*To change the display property in JavaScript, consider the use of .style.display = "block" in 
a selection structure where the condition looks at the day of the week through
the Date() object and getDay() method Links to an external site.. 
Note that you most likely already have a date type variable that you can use given 
the current date and/or copyright year is published to the page using JavaScript.*/