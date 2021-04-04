function hamburger(){

    

    document.getElementById("primaryNav").classList.toggle("hide");
}

//function DispAlert(){
   
  // var alert = main.today.getDate(); 
    //if(weekday== "5"){
     //   document.getElementById("Fri").style.display="block";
    //}else{
     //   document.getElementById("others").style.display="block";
    //}
     
  //}


  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}