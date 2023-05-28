function appendData(data) {
    let mainContainer = document.getElementById("Posts");
    let imageContainer = document.getElementById("images");
    
    
    data.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML =` Resturant id ${element.Resturant_id} resturant name ${element.Resturant_name} address ${element.Address}
        email ${element.email} <img src=${element.image}>`;
        let divimage=document.createElement("divimage");
        
        mainContainer.appendChild(div);
        imageContainer.appendChild(divimage);
        
        
    });
    
    
}
const putPosts= () => {
    
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"Resturant_id": 5,
  "Resturant_name": "Barbar",
  "Address": "Zaytouna Bey",
  "email": "Info@Macdonalds.com",
  "image":"https://sayajihotels.com/images/innerBanner/sayaji-indore-dining.jpg"
})
})

  .then(response => response.json())
  .then(response => console.log(JSON.stringify(response)))
}
putPosts();
/*for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    let divimage=document.createElement("images");
    div.innerHTML =` Resturant id ${data[i].Resturant_id} resturant name ${data[i].Resturant_name} address ${data[i].Address}
    email ${data[i].email}`;
    divimage.innerHTML=data[i].image;
    mainContainer.appendChild(div);
    mainContainer.appendChild(divimage);
}*/


const getPosts= () => {
    fetch('test.json', {
        method: 'GET',
        
    })
        .then((response) => response.json())
        .then((json) => appendData(json));
}
getPosts();

function check(form)
{

 if(form.email.value == "walid@live.com" && form.password.value == "P@ssword")
  {
    window.open('dashboard.html')
  }
 else
 {
   alert("Incorrect UserName or Bad Password")
  }
}
/*const fs = require('fs');

// Read the contents of the JSON file
const data = fs.readFileSync('test.json');
// Parse the JSON data into a JavaScript object
const jsonData = JSON.parse(data);

console.log("Before Adding data",JSON.stringify(jsonData, null, 4));

// Modify the JavaScript object by adding new data
jsonData.Resturants.push({
    name: "James Den",
    email: "james.den@example.com"
});


// Convert the JavaScript object back into a JSON string
const jsonString = JSON.stringify(jsonData);

fs.writeFileSync('test.json', jsonString, 'utf-8', (err) => {
  if (err) throw err;
  console.log('Data added to file');
});

const update_data = fs.readFileSync('test.json');
const updated_jsonData = JSON.parse(update_data);
console.log("After Adding data",JSON.stringify(updated_jsonData, null, 4));*/