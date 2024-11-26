const LOCATION = document.getElementById("location");
const TEMPERATURE = document.getElementById("temperature");
const DESCRIPTION = document.getElementById("description");
const SEARCH_BTN = document.getElementById("search-btn");
SEARCH_BTN.addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("city-input").value;
  const apiKey = "7a29cbd3f380d94e6eba3bc5b6834ef5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a5985c2f7846c1b3f39922bd0313d31&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found!");
      } else {
        console.log(data);

        // Extract relevant data
        LOCATION.innerText = data.name;
        TEMPERATURE.innerText = data.main.temp;
        DESCRIPTION.innerText = data.weather[0].description;

        // Display data in HTML

        // description.charAt(0).toUpperCase() + description.slice(1);
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching weather data.");
    });
}
