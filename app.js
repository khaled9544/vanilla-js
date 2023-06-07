
function appendData(restaurants) {
  const mainContainer = document.getElementById("restaurants");

  restaurants.forEach(restaurant => {
    const parentDiv = document.createElement("div"); // random div
    parentDiv.classList.add('restaurant-parent'); // div with class name restaurant-parent
    
    const imageRestaurant = document.createElement("img"); // random img
    imageRestaurant.setAttribute('src', restaurant.image); // randim img src=""

    parentDiv.appendChild(imageRestaurant); // <div><img /></div>
    
    const restaurantDescription = document.createElement('div');
    restaurantDescription.classList.add('restaurant-description');
    parentDiv.appendChild(restaurantDescription);

    
    const name = document.createElement('h3');
    name.innerHTML = restaurant.restaurant_name;
    restaurantDescription.appendChild(name);
    
    // const address = document.createElement('span'); 
    // address.classList.add('restaurant-address');
    // address.innerHTML = restaurant.Address;
    // restaurantDescription.appendChild(address);

    const restaurantDetailsParent = document.createElement('div');
    restaurantDetailsParent.classList.add('restaurant-details-parent');
    restaurantDescription.append(restaurantDetailsParent);

    
    

    const time = document.createElement('span'); 
    time.classList.add('restaurant-time');
    time.innerHTML = restaurant.time;
    restaurantDetailsParent.appendChild(time);

    const Price = document.createElement('span'); 
    Price.classList.add('restaurant-price');
    Price.innerHTML = restaurant.Price;
    restaurantDetailsParent.appendChild(Price);

    
    const Rating = document.createElement('mark'); 
    Rating.classList.add('restaurant-rating');
    Rating.innerHTML = `&#9733; ${restaurant.Rating}`;
    restaurantDetailsParent.appendChild(Rating);


    // const phoneNumber = document.createElement('span'); 
    // phoneNumber.classList.add('restaurant-phone-number');
    // phoneNumber.innerHTML = `${restaurant.Phone}`;
    // restaurantDescription.appendChild(phoneNumber);

   

    
    
    // const webSite = document.createElement('span'); 
    // webSite.classList.add('restaurant-website');
    // webSite.innerHTML =`${restaurant.webSite}`;
    // restaurantDescription.appendChild(webSite);
    


    mainContainer.appendChild(parentDiv);
    // const webSite = document.createElement('div'); 
    //webSite.classList.add('restaurant-webSite');
    //webSite.innerHTML = restaurant.webSite;
    //restaurantDescription.appendChild(webSite);

  })
}


/*function addRandomRestaurant(restaurants) {
  const _restaurants = [...restaurants];
  const newRestaurant = {
      "Resturant_id": "khaled",
      "Resturant_name": "l2",
      "Address": "l2",
      "email": "khaled@test.com",
      "image": "random"
  };
  _restaurants.push(newRestaurant);
  return _restaurants;
};

const putPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Resturant_id": 5,
      "Resturant_name": "Barbar",
      "Address": "Zaytouna Bey",
      "email": "Info@Macdonalds.com",
      "image": "https://sayajihotels.com/images/innerBanner/sayaji-indore-dining.jpg"
    })
  })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}

putPosts();
*/
const getPosts = () => {
  fetch('test.json', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {

      appendData(json.restaurants);
    });
}

getPosts();

function Redirect() {

  window.location.replace('http://localhost:5500/orders.html');
}





