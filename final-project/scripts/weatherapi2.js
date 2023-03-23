const url = `https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=3&units=imperial&appid=bb0d26cfb4b9fcb67962970ac716e90b`
// const url = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&cnt=3&appid=bb0d26cfb4b9fcb67962970ac716e90b`


// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windChill = document.getElementById('wind-chill');
const windSpeed = document.getElementById('wind_speed');
const humidity1 = document.getElementById('humidity');



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // currentTemp.innerHTML = data.main.temp
            console.log(data.list); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    const temp = weatherData.main.temp
    const speed = weatherData.wind.speed
    const humidity = weatherData.main.humidity

    if (temp <= 50 && speed > 3) {
        windChill.innerHTML = `${parseInt(getwindchill(temp, speed))} °F`
        //const windchill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** .016));
        //document.getElementById("wind_chill").innerText = windchill.toFixed(0)
    }
    else {
        windChill.textContent = "N/A"
        //document.getElementById("wind_chill").innerText = "N/A"
    }

    currentTemp.innerHTML = temp.toFixed(0);
    windSpeed.innerHTML = speed.toFixed(0);
    humidity1.innerHTML = humidity.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

function getwindchill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** .016));
}