const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=36.0308&lon=139.2441&appid=e091ddae283b74b39c3c301615515e22&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);
    const tempreture = document.querySelector('#temp');
    tempreture.textContent = jsObject.main.temp;

    const weather = document.querySelector("#weather");
    weather.textContent = jsObject.weather[0].description;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;

    const speed = document.querySelector("#speed");
    speed.textContent = jsObject.wind.speed;



    const temp2 = jsObject.main.temp;
    const speed2 = jsObject.wind.speed;
    const chillFactor =35.74 + 0.6215 * temp2 - 35.75*Math.pow(speed2,0.16) + 0.4275*temp2 *Math.pow(speed2,0.16);
       if(temp2>50 && speed2< 4.8){
       chillFactor= "N\/A";
        //return chillFactor;
   }
    
   

    //const chillFactor = 35.74 + 0.6215 * temp - 35.75*Math.pow(speed,0.16) + 0.4275*temp *Math.pow(speed,0.16);
    document.getElementById(`wind`).textContent = chillFactor.toFixed(2); 


    
   
   
  });