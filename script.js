const apiKey = '82f9a6dfaca39198ad4b6647114b2745';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherImg = document.querySelector('.weather-icon');


async function getWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`)
    const data = await response.json();
    if (data.message === 'city not found') {
        weatherImg.src = "images/notfnd.png"
        document.querySelector('.city').innerHTML = data.message;
        document.querySelector('.temp').innerHTML = `-`;
        document.querySelector('.humidity').innerHTML = `-`;
        document.querySelector('.wind').innerHTML = `-`;
    } else {

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°c`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
        switch (data.weather[0].main) {
            case "Clouds":
                weatherImg.src = "images/clouds.png"
                break;
            case "Clear":
                weatherImg.src = "images/clear.png"
                break;
            case "Rain":
                weatherImg.src = "images/rain.png"
                break;
            case "Drizzle":
                weatherImg.src = "images/drizzle.png"
                break;
            case "Mist":
                weatherImg.src = "images/mist.png"
                break;
        }
        document.querySelector('.weather').style.display = 'block';
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(`&q=${searchBox.value}`);

});
