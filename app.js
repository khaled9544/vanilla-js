function appendData(restaurants) {
  let mainContainer = document.getElementById("posts");
  restaurants.forEach(element => {
    let div = document.createElement("div");
    div.innerHTML = `${element.Resturant_id} resturant name ${element.Resturant_name} address ${element.Address}
        email ${element.email} <img src=${element.image}>`;
    mainContainer.appendChild(div);
  });
}

function addRandomRestaurant(restaurants) {
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

const getPosts = () => {
  fetch('test.json', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => {
      const restaurants = addRandomRestaurant(json.restaurants);
      appendData(restaurants);
    });
}

getPosts();