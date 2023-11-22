// Function to fetch weather data from OpenWeatherMap API
async function getWeatherData() {
  
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-31.42&lon=-64.17&units=metric&appid=f9c9fbb068bb746cdd34450e8894b24b';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Function to display weather data on the webpage
async function displayWeather() {
  const weatherData = await getWeatherData();
  const weatherIcon = document.querySelector('#weather-icon');
  let desc = weatherData.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', weatherData.weather[0].main);
  document.getElementById('currentTemp').innerText = ` ${weatherData.main.temp}°C`;
  desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
  weatherDescription.textContent = `${desc}`;

  // Fetch three day forecast
  
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-31.42&lon=-64.17&appid=f7268c3adc62cc92c3d24fe85a731f30&units=metric`;

  try {
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();
      const forecastList = forecastData.list;
      console.log(forecastList);
      const daysForecast = forecastList.filter(item => item.dt_txt.includes('12:00:00'));

      const forecastListElement = document.getElementById('forecast');
      forecastListElement.innerHTML = '';
      
      daysForecast.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temperature = day.main.temp ;
        desc = day.weather[0].description;
        desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const listItem = document.createElement('li');
        listItem.innerText = `${dayOfWeek}: ${temperature}°C  ${desc}`;
        forecastListElement.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching forecast data:', error);
  }
}

// Function to check and display the banner on specific days
function displayBanner() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Display banner on Mondays, Tuesdays, and Wednesdays (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
    document.getElementById('banner').style.display = 'block';
  }
}

// Function to close the banner
function closeBanner() {
  document.getElementById('banner').style.display = 'none';
}

// Load weather data and display banner when the page loads
window.onload = function () {
  displayWeather();
  displayBanner();
};
