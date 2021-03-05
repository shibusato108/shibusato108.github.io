const requestURL ='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
     console.table(jsonObject);  // temporary checking for valid response and data parsing
     const towns = jsonObject['towns'];
         for (let i = 0; i < towns.length; i++ ) {
            if(i==5){
             let card = document.createElement('section');
             let h1 = document.createElement('h1');
             let motto = document.createElement('p');
             let population = document.createElement('p');
             let rain = document.createElement('p');
             let image = document.createElement('img');
             
             h1.textContent = towns[i].name;
             motto.textContent = towns[i].motto;
             population.textContent = "Population : " + towns[i].currentPopulation;
             rain.textContent = "Annual Rain Fall : " + towns[i].averageRainfall;
             image.setAttribute('src', towns[i].photo);
             
 
             card.appendChild(h1);
             card.appendChild(motto);
             card.appendChild(population);
             card.appendChild(rain);
             card.appendChild(image);
             card.setAttribute("class", "card");
             
             document.querySelector("div.cards").appendChild(card);
            } else  if(i==1){
                let card = document.createElement('section');
                let h1 = document.createElement('h1');
                let motto = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');
                
                h1.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                population.textContent = "Population : " + towns[i].currentPopulation;
                rain.textContent = "Annual Rain Fall : " + towns[i].averageRainfall;
                image.setAttribute('src', towns[i].photo);
                
    
                card.appendChild(h1);
                card.appendChild(motto);
                card.appendChild(population);
                card.appendChild(rain);
                card.appendChild(image);
                card.setAttribute("class", "card");
                
                document.querySelector("div.cards").appendChild(card);
               } else if (i==6){
                let card = document.createElement('section');
                let h1 = document.createElement('h1');
                let motto = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');
                
                h1.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                population.textContent = "Population : " + towns[i].currentPopulation;
                rain.textContent = "Annual Rain Fall : " + towns[i].averageRainfall;
                image.setAttribute('src', towns[i].photo);
                
    
                card.appendChild(h1);
                card.appendChild(motto);
                card.appendChild(population);
                card.appendChild(rain);
                card.appendChild(image);
                card.setAttribute("class", "card");
                
                document.querySelector("div.cards").appendChild(card);
               } 
         }
             
   });