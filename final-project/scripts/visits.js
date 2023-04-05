const lastVisit = document.getElementById('lastVisit');
const numberVisit = document.getElementById('numberVisit');
const timestamp = Date.now();

// get the timestamp from localstorage,
const time2 = localStorage.getItem('lastVisitTimestamp');
const numvisit = localStorage.getItem('numberVisitTimestamp');
// now - timestamp in localstorage
// difference/(1000*60*60*24) - how many mil sec in a day
const time = (timestamp - time2) / (1000 * 60 * 60 * 24);

localStorage.setItem('lastVisitTimestamp', timestamp);
localStorage.setItem('numberVisitTimestamp', timestamp);
// put the difference here

lastVisit.innerText = time.toFixed(0);
numberVisit.innerText = time.toFixed(0);
