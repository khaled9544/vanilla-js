
function appendData(restaurants) {
  const mainContainer = document.getElementById("restaurants");
  restaurants.forEach(restaurant => {
    
    const parentDiv = document.createElement("div");
    
    parentDiv.classList.add('restaurant-parent');
    
    
    const imageRestaurant = document.createElement("img");
    imageRestaurant.setAttribute('src',restaurant.image);
    parentDiv.appendChild(imageRestaurant);
    
    const restaurantDescription = document.createElement('div');
    restaurantDescription.classList.add('restaurant-description');
    parentDiv.appendChild(restaurantDescription);

    
    const name = document.createElement('h3');
    name.innerHTML = restaurant.restaurant_name;
    restaurantDescription.appendChild(name);
    
    const address = document.createElement('span'); 
    address.classList.add('restaurant-address');
    address.innerHTML = restaurant.Address;
    restaurantDescription.appendChild(address);
    
    

    // TODO: Add the website.
    
    
    const avgPrice = document.createElement('span'); 
    avgPrice.classList.add('restaurant-avg-price');
    avgPrice.innerHTML = restaurant.Price;
    restaurantDescription.appendChild(avgPrice);


    const phoneNumber = document.createElement('span'); 
    phoneNumber.classList.add('restaurant-phone-number');
    phoneNumber.innerHTML = `</br> ${restaurant.Phone}`;
    restaurantDescription.appendChild(phoneNumber);

    const RestaurantRating = document.createElement('span'); 
    RestaurantRating.classList.add('restaurant-Rating');
    RestaurantRating.innerHTML = `</br> Rating ${restaurant.Rating}`;
    restaurantDescription.appendChild(RestaurantRating);

    
    
    const webSite = document.createElement('span'); 
    webSite.classList.add('restaurant-webSite');
    webSite.innerHTML =`</br> ${restaurant.webSite}`;
    restaurantDescription.appendChild(webSite);
    


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

class Malls {

  id= "1"
  name = "Roadster";
  Address= "Zaytouna Bey";
}
//console.log(Malls);


const Mall1= new Malls();
console.log(Mall1);
    

document.getElementById("Malls").innerHTML = `${Mall1.name}`;




