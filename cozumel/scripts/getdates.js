// Declaring and instantiating a variable to hold the current year
const currentYear = new Date().getFullYear();

// Placing the value of the current year variable into the HTML file
document.getElementById('year').textContent = currentYear;

// Declaring and instantiating a variable to hold the last modification
let oLastModif = new Date(document.lastModified);

// Placing the value of the current modification variable into the HTML file
document.getElementById('modified').innerHTML = oLastModif;

//creating habmburger menu interactions.
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});