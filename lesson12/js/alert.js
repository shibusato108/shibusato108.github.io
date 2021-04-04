const aapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=36.0308&lon=139.2441&appid=e091ddae283b74b39c3c301615515e22&units=imperial";
fetch(aapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const alert = document.querySelector('#alert');
    alert.textContent = jsObject.main.alert.event;

    const weather = document.querySelector("#others");
    weather.textContent = jsObject.main.alert.description;

    document.getElementById("others").style.display="block";

    //const speed = document.querySelector("#speed");
    //speed.textContent = jsObject.wind.speed;



    //const temp2 = jsObject.main.temp;
   // const speed2 = jsObject.wind.speed;
   // const chillFactor =35.74 + 0.6215 * temp2 - 35.75*Math.pow(speed2,0.16) + 0.4275*temp2 *Math.pow(speed2,0.16);
   //    if(temp2>50 && speed2< 4.8){
   //    chillFactor= "N\/A";
        //return chillFactor;
   //}
    
   

    //const chillFactor = 35.74 + 0.6215 * temp - 35.75*Math.pow(speed,0.16) + 0.4275*temp *Math.pow(speed,0.16);
   // document.getElementById(`wind`).textContent = chillFactor.toFixed(2); 


    
   
   
  });