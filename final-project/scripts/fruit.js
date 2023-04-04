const url = 'fruitdata.json';

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);  // note that we reference the company array of the data object given the structure of the json file
    displayFruit(data);
    generateOptions(data)
}

getFruitData();

const generateOptions = (fruitsData) => {
    const fruit1 = document.getElementById("fruit1")
    const fruit2 = document.getElementById("fruit2")
    const fruit3 = document.getElementById("fruit3")

    const fruitArray = [fruit1, fruit2, fruit3]

    fruitArray.forEach(fruit => {
        fruitsData.forEach(fruitData => {
            let option = document.createElement('option')
            option.value = fruitData.name
            option.innerText = fruitData.name
            fruit.appendChild(option)
        })
    })
}

const displayFruit = (fruits) => {
    const cards = document.querySelector('div#cards'); // select the output container element

    fruits.forEach((fruit) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let name = document.createElement('h2');
        let genus = document.createElement('p');
        let family = document.createElement('p');
        let order = document.createElement('p');
        let carbohydrates = document.createElement('p');
        let protein = document.createElement('p');
        let fat = document.createElement('p');
        let calories = document.createElement('p');
        let sugar = document.createElement('p');

        // Build the h2 content out to show the company's full name - finish the template string
        name.textContent = `name: ${fruit.name} `;
        genus.textContent = `genus: ${fruit.genus}`;
        family.textContent = `family: ${fruit.family}`;
        order.textContent = `order: ${fruit.order}`;


        // const nutritionsList
        carbohydrates.textContent = `carbohydrates: ${fruit.nutritions.carbohydrates}`;
        protein.textContent = `protein: ${fruit.nutritions.protein}`;
        fat.textContent = `fat: ${fruit.nutritions.fat}`;
        calories.textContent = `calories: ${fruit.nutritions.calories}`;
        sugar.textContent = `sugar: ${fruit.nutritions.sugar}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', fruit.imageurl);
        portrait.setAttribute('alt', `Portait of ${fruit.name} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(genus);
        card.appendChild(family);
        card.appendChild(order);
        card.appendChild(carbohydrates);
        card.appendChild(protein);
        card.appendChild(fat);
        card.appendChild(calories);
        card.appendChild(sugar);



        cards.appendChild(card);
    }); // end of forEach loop
}// end of function expression

const gridBtn = document.getElementById("gridBtn")
const cards = document.getElementById("cards")
gridBtn.addEventListener("click", () => { cards.classList.add("gridLayout"); cards.classList.remove("listLayout") })

const listBtn = document.getElementById("listBtn")
listBtn.addEventListener("click", () => { cards.classList.add("listLayout") })