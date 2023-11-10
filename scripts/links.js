
const baseUrl = "https://nines91.github.io/wdd230/";
const linksURL = "https://nines91.github.io/wdd230/data/links.json";
const references = document.querySelector('#activity-links')

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    
    weeks.forEach((lessons) => {

        const weekDiv = document.createElement('div');
        weekDiv.innerHTML = `<p>${lessons.lesson}: </p>`;

        lessons.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            weekDiv.appendChild(linkElement);
          });
        references.appendChild(weekDiv);
    });
}

getLinks();