function doInputOutput(){
    let temp = 54;//parseFloat(document.getElementById("temp"));
    let speed = 12;//parseFloat(document.getElementById("Speed"));
    let display = windChill(temp,speed);

   // if(temp>50){
     //   if(speed<4.8)
      //  var display = N\/A;
    //}else{
        document.getElementById('wind').innerHTML = display;

   
    //}
 
}

function windChill(t,s){

    let chillFactor = 35.74 + 0.6215 * t - 35.75*Math.pow(s,0.16) + 0.4275*t *Math.pow(s,0.16);
    return chillFactor.toFixed(2);
}


