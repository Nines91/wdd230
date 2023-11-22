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
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector('#mode');
const content = document.querySelector('main');

modeButton.addEventListener('click', () => {
	if (modeButton.textContent.includes('🌑')) {
		content.style.background = 'var(--primary-color)';
		content.style.color = '#fff';
		modeButton.textContent = '🔆';
	} else {
		content.style.background = 'var(--secondary-color)';
		content.style.color = '#000';
		modeButton.textContent = '🌑';
	}
});