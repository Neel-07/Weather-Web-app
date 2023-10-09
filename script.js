const apiKey = 'a46204c99e856ef2b7517cb7bc2f4086'; // Replace with your OpenWeatherMap API key
const locationInput = document.getElementById('location-input');
const searchButton = document.getElementById('search-button');
const temperatureElement = document.querySelector('.temperature');
const conditionsElement = document.querySelector('.conditions');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const conditions = data.weather[0].description;

            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            conditionsElement.textContent = `Conditions: ${conditions}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data.');
        });
});
