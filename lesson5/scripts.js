
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




