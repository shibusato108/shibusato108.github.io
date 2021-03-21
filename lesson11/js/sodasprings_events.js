const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
   //  console.table(jsonObject);  // temporary checking for valid response and data parsing
     const towns = jsonObject['towns'];
             let card = document.createElement('section');
             let event1 = document.createElement('p');
             let event2 = document.createElement('p');
             let event3 = document.createElement('p');
             let event4 = document.createElement('p');
             
             
             event1.textContent = towns[0].events[0];
             event2.textContent = towns[0].events[1];
             event3.textContent = towns[0].events[2];
             event4.textContent = towns[0].events[3];
             
             
 
             card.appendChild(event1);
             card.appendChild(event2);
             card.appendChild(event3);
             card.appendChild(event4);
             card.setAttribute("class", "card");
            
             
             document.querySelector("div.card").appendChild(card);
           
                
               
               
         
             
   });