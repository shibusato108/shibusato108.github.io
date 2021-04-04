const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
        for (let i = 0; i < businesses.length; i++ ) {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let contact = document.createElement('p');
            let url = document.createElement('p');
            let image = document.createElement('img');
            
            name.textContent = "Name: " + businesses[i].name;
            contact.textContent = "contact:" + businesses[i].contact;
            url.textContent = "Web Site : " + businesses[i].url;
            image.setAttribute('src', businesses[i].imageurl);
            image.setAttribute('alt', businesses[i].name);

            card.appendChild(name);
            card.appendChild(contact);
            card.appendChild(url);
            card.appendChild(image);
            card.setAttribute("class", "card");
            
            document.querySelector("div.cards").appendChild(card);
        }
            
  });


  