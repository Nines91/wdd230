// Selecting HTML elementes in the documents
const cityName = document.querySelector('.info-paragraph');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-31.42&lon=-64.17&units=metric&appid=f9c9fbb068bb746cdd34450e8894b24b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw error (await response.text())
        }
    } catch (error) {
        console.log(error)     
    }
}

function displayResults(data) {
    cityName.innerHTML = `${data.name}, ${data.sys.country}`;
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].main)
    desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
    captionDesc.textContent = `${desc}`;
  }

apiFetch();