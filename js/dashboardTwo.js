console.log("dashboardTwo.js loaded!");

// Hier is een variabele gemaakt met de link die gefetched moet worden.
const weatherApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.08&longitude=4.30&hourly=temperature_2m,rain,windspeed_10m&daily=sunrise,sunset,uv_index_max&current_weather=true&timezone=auto';

// Maakt een variabele aan en wijst naar de plek waar de chart komt
const ctx = document.querySelector('.chart-temperature');

// Voert een fetch uit en voert de functie createCharts uit met de json data
fetch(weatherApiUrl)
    .then(myData => myData.json())
    .then(jsonData => createCharts(jsonData));

// De functie createCharts maakt de chart aan met de temperaturen en windsnelheden voor 7 dagen per uur
function createCharts(data) {

    // Hier word word een chart aangemaakt met de data uit de fetch
    new Chart(ctx, {
        data: {
            labels: data.hourly.time,
            datasets: [{
                type: 'line',
                label: '#Temperature in celsius',
                data: data.hourly.temperature_2m,
                backgroundColor: '#Ff0000',
                borderColor: '#Ff0000',
                borderWidth: 1
            },
            {
                type: 'line',
                label: '#Windspeed in km/h',
                data: data.hourly.windspeed_10m,
                backgroundColor: '#d3d3d3',
                borderColor: '#d3d3d3',
                borderWidth: 1
            },
            {
                type: 'bar',
                label: '#Rain in mm',
                data: data.hourly.rain,
                backgroundColor: '#89CFF0',
                borderColor: '#89CFF0',
                borderWidth: 1
            }

            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Hier word de data gelogged zodat je in de console kan zien of de data correct is gefetched
    console.log(data);

    // Vervolgens worden de functie highestTemperature, highestWindspeed en currentWeather uitgevoerd
    highestTemperature(data);
    highestWindspeed(data);
    currentWeatherDisplay(data)

}

// De functie currentWeather zorgt ervoor dat de temperatuur van op dit moment word weergegeven.
function currentWeatherDisplay(data) {

    const temperature = data.current_weather.temperature
    const wind = data.current_weather.windspeed



    let temperatureDisplay = document.querySelector('.temperature-display');
    let windDisplay = document.querySelector('.wind-display');
    let wearShortsDisplay = document.querySelector('.wear-shorts-display');

    temperatureDisplay.innerHTML = `${temperature}°C`;
    windDisplay.innerHTML = `<strong> windspeed: ${wind} km/h </strong>`;

    if (temperature >= 20) {
        wearShortsDisplay.innerHTML = '<i class="bi bi-hand-thumbs-up"></i> Absolutely!'
    } else {
        wearShortsDisplay.innerHTML = '<i class="bi bi-hand-thumbs-down"></i> Definetly not'
    }

}

// De functie highestTemperature berekend de hoogste getal van de temperaturen array met een for-loop en een if-statement
function highestTemperature(data) {

    // Hier word de html element opgeroepen om de data weer te geven
    let temperatureValue = document.querySelector('.temperature-value');

    // Hier word de hoogste temperatuur berekend
    console.log("data:", data);
    const tempList = data.hourly.temperature_2m;
    let highest = 0;
    for (let i = 0; i < tempList.length; i++) {
        const temp = tempList[i];
        if (highest < temp) {
            highest = temp;
        }
    }

    // Hier word het gelogged en komt het in de aangeroepen html Element.
    temperatureValue.innerHTML = `${highest}°C`
    console.log("Highest temperature: ", highest);

}

// De functie highestTemperature berekend de hoogste getal van de windsnelheden array met een for-loop en een if-statement
function highestWindspeed(data) {

    // Hier word de html element opgeroepen om de data weer te geven
    let windValue = document.querySelector('.wind-value');

    // Hier word de hoogste windsnelheid berekend
    console.log("data:", data);
    const windList = data.hourly.windspeed_10m;
    let highest = 0;
    for (let i = 0; i < windList.length; i++) {
        const wind = windList[i];
        if (highest < wind) {
            highest = wind;
        }
    }
    // Hier word het gelogged en komt het in de aangeroepen html Element.
    windValue.innerHTML = `${highest} km/h`
    console.log("Highest windspeed: ", highest);

}