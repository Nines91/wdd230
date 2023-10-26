
// Function to calculate wind chill
function calculateWindChill(temperature, windspeed) {
    // Check if the temperature and wind speed meet the specification limits
    if (temperature <= 50 && windspeed > 3.0) {
        // Calculate the wind chill using the formula
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
        return windChill.toFixed(1) + " °F";
    } else {
        return "N/A";
    }
}

// Function to update the wind chill on the page
function updateWindChill() {
    const temperatureElement = document.getElementById("temperature");
    const windspeedElement = document.getElementById("windspeed");
    const windchillElement = document.getElementById("windchill");

    // Extract temperature and wind speed values
    const temperature = parseFloat(temperatureElement.innerText);
    const windspeed = parseFloat(windspeedElement.innerText);

    // Calculate the wind chill
    const windChillValue = calculateWindChill(temperature, windspeed);

    // Update the page with the wind chill value
    windchillElement.innerText = windChillValue;
}

// Call the updateWindChill function when the page loads
window.addEventListener("load", updateWindChill);
