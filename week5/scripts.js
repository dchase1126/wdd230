
const butt = document.querySelector("button");
const input = document.querySelector("input");
const list = document.getElementById("list");

butt.addEventListener("click"), () => {
    const li = document.createElement('li');

    const div = document.createElement(div);


    // put li and newButt inside div
    // <div> <li> <button> li div

    li.innerText = input.value
    // newButt should have a new eventlistener - click - toggleclass to display none

    list.appendChild(li) // indtead of li, you put div
    input.value = ""
}

const newButt = document.createElement("newButt");/*delete button*/
/*delete button*/
newButt.addEventListener("click"), () => {
    //classtoggle = display = "none"
    list.appendChild(div) // instead of li, you put div
    input.value = ""
}

/*from https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaLabel 
let el = document.getElementById('close-button');
console.log(el.ariaLabel); // "Close"
el.ariaLabel = "Close dialog"
console.log(el.ariaLabel); // "Close dialog"
*/







/*Code below is from Tutor!!


/*const butt = document.querySelector("button");
const input = document.querySelector("input");
const list = document.getElementById("list");




// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName('li');
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var li = document.createElement("li");
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
} */