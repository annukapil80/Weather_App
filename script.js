const apiKey = "d70a45ff18c1ad75c67a1da976f568c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="; 

async function getWeather() {
    let city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    let response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        alert("City not found! Please enter a valid city.");
        return;
    }

    let data = await response.json();
    console.log(data);

    // Update UI
    document.getElementById("temp-div").innerHTML = `<p>${data.main.temp}°C</p>`;
    document.getElementById("weather-info").innerText = data.weather[0].description;

    let iconCode = data.weather[0].icon;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("weather-icon").style.display = "block";
}

