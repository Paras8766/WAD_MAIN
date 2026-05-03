function getWeather() {

    const city = document.getElementById("city")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("result");

    result.style.display = "none";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "weather.json", true);

    xhr.onload = function () {

        if (xhr.status === 200) {

            const weatherData = JSON.parse(xhr.responseText);

            if (weatherData[city]) {

                const data = weatherData[city];

                result.innerHTML = `
                    <h3>${city.toUpperCase()}</h3>

                    <p><strong>Temperature:</strong> ${data.temperature}</p>
                    <p><strong>Humidity:</strong> ${data.humidity}</p>
                    <p><strong>Condition:</strong> ${data.condition}</p>
                `;
            } else {

                result.innerHTML = `
                    <p class="error">City not found in repository!</p>
                `;
            }
        } else {

            result.innerHTML = `
                <p class="error">Error loading weather data!</p>
            `;
        }

        result.style.display = "block";
    };

    xhr.onerror = function () {

        result.innerHTML = `
            <p class="error">Error loading weather data!</p>
        `;

        result.style.display = "block";
    };

    xhr.send();
}