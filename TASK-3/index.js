const cityInput = document.getElementById("cityInput");
const getWeather = document.getElementById("getWeather");
const result = document.getElementById("result");
const error = document.getElementById("error");

const apiKey = "YOUR_API_KEY_HERE"; 

async function fetchWeather() {
    const city = cityInput.value.trim();
    if (city === "") {
        error.textContent = "Enter a city name";
        result.innerHTML = "";
        return;
    }

    error.textContent = "";
    result.innerHTML = "Loading...";

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!res.ok) {
            result.innerHTML = "";
            error.textContent = "City not found";
            return;
        }

        const data = await res.json();

        result.innerHTML = `
            Temperature: ${data.main.temp}°C<br>
            Humidity: ${data.main.humidity}%<br>
            Condition: ${data.weather[0].description}
        `;
    } catch {
        result.innerHTML = "";
        error.textContent = "Error fetching data";
    }
}

getWeather.onclick = fetchWeather;
