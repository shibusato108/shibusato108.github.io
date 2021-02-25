function doInputOutput(){
    let temp = 49; //parseFloat(document.getElementById("temp").textContent); 
    let speed = 12; //parseFloat(document.getElementById("Speed").textContent); 
    let display = windChill(temp,speed);

  //  if(temp>50&&speed<4.8){
      
     //   var display = "N\/A";
     //   document.getElementById('wind').innerHTML = display;
    //}else{
        document.getElementById('wind').innerHTML = display;

   
    
 
}

function windChill(t,s){
    if(t>50 && s< 4.8){
        chillFactor= "N\/A";
        return chillFactor;
    }else{

    let chillFactor = 35.74 + 0.6215 * t - 35.75*Math.pow(s,0.16) + 0.4275*t *Math.pow(s,0.16);
    return chillFactor.toFixed(2);
}

}
