//let currentYear = new Date();
//currentYear = currentYear.getFullYear();
//document.getElementById('currentYear').innerHTML = currentYear;
let currentDay = new Date().getDay();

//if the day is Monday or Tuesday
//ternary
document.getElementById('banner').style.display = (currentDay == 1 || currentDay == 2) ? "block" : "none";

const is21 = true
const isInUS = false
is21 && isInUS && console.log('can')

/*To change the display property in JavaScript, consider the use of .style.display = "block" in 
a selection structure where the condition looks at the day of the week through
the Date() object and getDay() method Links to an external site.. 
Note that you most likely already have a date type variable that you can use given 
the current date and/or copyright year is published to the page using JavaScript.*/