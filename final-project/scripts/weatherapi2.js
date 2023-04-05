const url = `https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=4&units=imperial&appid=bb0d26cfb4b9fcb67962970ac716e90b`


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // currentTemp.innerHTML = data.main.temp
            
            displayResults(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherDataList) {

    const weather = document.querySelector('.weather')
    const newDay = new Date().getDay()
    weatherDataList.forEach((data, index) => {

        let day;
        if (newDay == new Date().getDay() + index) {
            day = 'Today'
        } else {
            switch (new Date().getDay() + index) {
                case 1:
                    day = 'Monday'
                    break
                case 2:
                    day = 'Tuesday'
                    break
                case 3:
                    day = 'Wednesday'
                    break
                case 4:
                    day = 'Thursday'
                    break
                case 5:
                    day = 'Friday'
                    break
                case 6:
                    day = 'Saturday'
                    break
                case 7:
                    day = 'Sunday'
                    break
            }
        }

        const temp = data.main.temp
        const speed = data.wind.speed
        const humidity = data.main.humidity
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const desc = data.weather[0].description;

        const oneDayWeather = document.createElement('div')
        const dayHTML = document.createElement('div')
        dayHTML.innerText = day
        const tempHTML = document.createElement('div')
        tempHTML.innerText = `Tempeture ${temp.toFixed(0)}`;
        const speedHTML = document.createElement('div')
        speedHTML.innerText = `Wind Speed ${speed.toFixed(0)}`;
        const humidityHTML = document.createElement('div')
        humidityHTML.innerText = `Humidity ${humidity.toFixed(0)}`;
        const weatherIcon = document.createElement('img')
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);

        oneDayWeather.appendChild(dayHTML)
        oneDayWeather.appendChild(tempHTML)
        oneDayWeather.appendChild(tempHTML)
        oneDayWeather.appendChild(speedHTML)
        oneDayWeather.appendChild(humidityHTML)
        oneDayWeather.appendChild(weatherIcon)

        weather.appendChild(oneDayWeather)
    })

}