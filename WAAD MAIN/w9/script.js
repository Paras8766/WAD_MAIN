async function getWeather() {

    const city = document.getElementById("city")
        .value
        .trim()
        .toLowerCase();

    const result = document.getElementById("result");

    result.style.display = "none";

    try {

        // AJAX request using fetch()
        const response = await fetch("weather.json");

        // Convert JSON response to JavaScript object
        const weatherData = await response.json();

        if (weatherData[city]) {

            const data = weatherData[city];

            result.innerHTML = `
                <h3>${city.toUpperCase()}</h3>

                <p>
                    <strong>Temperature:</strong>
                    ${data.temperature}
                </p>

                <p>
                    <strong>Humidity:</strong>
                    ${data.humidity}
                </p>

                <p>
                    <strong>Condition:</strong>
                    ${data.condition}
                </p>
            `;

        } else {

            result.innerHTML = `
                <p class="error">
                    City not found in repository!
                </p>
            `;
        }

    } catch (error) {

        result.innerHTML = `
            <p class="error">
                Error loading weather data!
            </p>
        `;
    }

    result.style.display = "block";
}