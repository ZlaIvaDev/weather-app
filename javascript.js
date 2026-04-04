console.log('dobar dan na weather!');

const APIkey = 'cf3a08c883df176f14babe9966e93ef9';

const cityCardName = document.querySelector('.city-name');
const getcity = document.getElementById('city-get');
const cityName = document.querySelector('input');

let lat = '';
let lon = '';


const temp = document.querySelector('.temp');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const weather = document.querySelector('.weather');
const description = document.querySelector('.description');
const wind = document.querySelector('.wind');


getcity.addEventListener('click', async function() {
    cityCardName.textContent = cityName.value;

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&limit=1&appid=${APIkey}`)
    const data = await response.json()

    lon = data[0]['lon']
    lat = data[0]['lat']

    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
    const weatherData = await response2.json()

    let tempC = (weatherData['main']['temp']-273.15).toFixed(1)
    let mintempC = (weatherData['main']['temp_min']-273.15).toFixed(1)
    let maxtempC = (weatherData['main']['temp_max']-273.15).toFixed(1)

    temp.textContent = `temperature: ${tempC}°C`
    min.textContent = `min temp: ${mintempC}°C`
    max.textContent = `max temp: ${maxtempC}°C`
    weather.textContent = `weather: ${weatherData['weather'][0]['main']}`
    description.textContent = `description: ${weatherData['weather'][0]['description']}`
    wind.textContent = `wind: ${weatherData['wind']['speed']} km/s`

    cityName.value = '';
})

