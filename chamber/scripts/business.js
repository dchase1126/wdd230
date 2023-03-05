const url = 'data.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companys);  // note that we reference the company array of the data object given the structure of the json file
    displayBusiness(data.companies);
}

getBusinessData();

    const displayBusiness = (companies) => {
    const cards = document.querySelector('div#cards'); // select the output container element

    companies.forEach((company) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let portrait = document.createElement('img');
        let webPg = document.createElement('p');
        let membership = document.createElement('p');

        // Build the h2 content out to show the company's full name - finish the template string
        h2.textContent = `${company.Business} `;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        webPg.textContent = `Web Page: ${company.webPg}`;
        membership.textContent = `membership: ${company.membership}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', company.imageurl);
        portrait.setAttribute('alt', `Portait of ${company.name} `);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(membership);
        card.appendChild(webPg);



        cards.appendChild(card);
    }); // end of forEach loop
}// end of function expression

const gridBtn = document.getElementById("gridBtn")
const cards = document.getElementById("cards")
gridBtn.addEventListener("click", () => { cards.classList.add("gridLayout"); cards.classList.remove("listLayout") })

const listBtn = document.getElementById("listBtn")
listBtn.addEventListener("click", () => { cards.classList.add("listLayout") })