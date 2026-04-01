console.log('dobar dan na weather!');

const APIkey = 'cf3a08c883df176f14babe9966e93ef9';

const ph = document.querySelector('.city');
const getcity = document.getElementById('city-get');
const cityName = document.querySelector('input');
getcity.addEventListener('click', function() {
    ph.textContent = cityName.value;

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIkey}`)
        .then(function(response) {
            console.log(response.json())
        })


    cityName.value = '';
})


async function getDAtaBy() {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIkey}`)
        .then(function(response) {
            console.log(response.json())
            
        })
}