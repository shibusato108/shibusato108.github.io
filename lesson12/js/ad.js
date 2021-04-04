const trequestURL = 'https://shibusato108.github.io/data/businesses.json';

fetch(trequestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
        for (let i = 0; i < 3; i++ ) {
            let cards = document.createElement('section');
            let name = document.createElement('h2');
            //let contact = document.createElement('p');
            //let url = document.createElement('p');
            let image = document.createElement('img');
            
            name.textContent = businesses[i].name;
            //contact.textContent = "contact:" + businesses[i].contact;
            //url.textContent = "Web Site : " + businesses[i].url;
            image.setAttribute('src', businesses[i].imageurl);
            image.setAttribute('alt', businesses[i].name);

            cards.appendChild(name);
           // cards.appendChild(contact);
            //cards.appendChild(url);
            cards.appendChild(image);
            cards.setAttribute("class", "cards");
            
            document.querySelector("div.cards2").appendChild(cards);
        }
            
  });


  