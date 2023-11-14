
const baseUrl = "https://nines91.github.io/wdd230/";
const linksURL = "https://nines91.github.io/wdd230/chamber/data/member.json";
const cards = document.querySelector('#members-card');

async function getMembersData () {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.companies);
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let name = document.createElement('h2'); 
      let portrait = document.createElement('img');
      let paragraph = document.createElement('p');
      let website = document.createElement('a');
  
      // Build the h2 content out to show the prophet's full name
      name.textContent = `${company.name}`; 
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', company.imagIcon);
      portrait.setAttribute('alt', `Portrait of ${company.name}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '280');
      portrait.setAttribute('height', '158');
      paragraph.innerHTML = `${company.address}<br>${company.phone}<br>${company.shortDescription}<br> Membership Level: ${company.membershipLevel}`;
      website.setAttribute =('href', company.website);
      website.setAttribute = ('alt', `Website of ${company.name}`); 
      
      
  
      // Append the section(card) with the created elements
      card.appendChild(name); 
      card.appendChild(portrait);
      card.appendChild(paragraph);
      card.appendChild(website);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }

  getMembersData();