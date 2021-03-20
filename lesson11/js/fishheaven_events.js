const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
     console.table(jsonObject);  // temporary checking for valid response and data parsing
     const towns = jsonObject['towns'];
             let card = document.createElement('section');
             let event = document.createElement('p');
             
             
             event.textContent = towns[2].events;
             
             
 
             card.appendChild(event);
             card.setAttribute("class", "card");
            
             
             document.querySelector("div.card").appendChild(card);
           
                
               
               
         
             
   });