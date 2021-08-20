var firstcity = prompt("Enter the your city:-");
let weather = {
  apiKey: "3561ee174a0759825802ee4f85439149",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description + "";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    weather.search();
  }
});
weather.fetchWeather(firstcity);
