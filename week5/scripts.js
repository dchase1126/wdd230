
const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  if (input.value != '') {

    const li = document.createElement('li');

    const newBtn = document.createElement('button');/*delete button*/
    li.innerHTML = input.value

    newBtn.textContent = 'Remove ❌'

    li.appendChild(newBtn)
    list.appendChild(li)
    input.value = ""

    newBtn.addEventListener("click", () => {
      list.removeChild(li)

    });

    input.focus()

  }
});

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