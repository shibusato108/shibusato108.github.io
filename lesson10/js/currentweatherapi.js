const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e091ddae283b74b39c3c301615515e22&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const tempreture = document.querySelector('#temp');
    tempreture.textContent = jsObject.main.temp;

    const weather = document.querySelector("#weather");
    weather.textContent = jsObject.weather[0].description;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;

    const speed = document.querySelector("#speed");
    speed.textContent = jsObject.wind.speed;


    //const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    //const desc = jsObject.weather[0].description;
    //document.getElementById('imagesrc').textContent = imagesrc;
    //document.getElementById('icon').setAttribute('src', imagesrc);
    //document.getElementById('icon').setAttribute('alt', desc);
   
   
  });