class Malls {

    id= "1"
    name = "Roadster";
    Address= "Zaytouna Bey";
    image = "https://pbs.twimg.com/profile_images/1113328092498604032/NKqLXdEa_400x400.png";
  }
  //console.log(Malls);
  
  
  const Mall1= new Malls();
  const Mall2= new Malls();
  const Mall3= new Malls();
  console.log(Mall3);
  console.log(Mall2);
  console.log(Mall1);
  const mainContainer = document.getElementById("Malls");

  const parentDiv = document.createElement("div");

  parentDiv.classList.add('Mall-parent');
  const MallDescription = document.createElement('div');
  MallDescription.classList.add('MallDescription');
  parentDiv.appendChild(MallDescription);

  
  const name2 = document.createElement('h3');
  name2.innerHTML = Malls;
  console.log(name2);
  restaurantDescription.appendChild(name2);

  mainContainer.appendChild(parentDiv);
  
  // const address = document.createElement('span'); 
  // address.classList.add('restaurant-address');
  // address.innerHTML = restaurant.Address;
  // restaurantDescription.appendChild(address);

  

      
      // document.getElementById("Malls").innerHTML = `${Mall1.name}`;
      