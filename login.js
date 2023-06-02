// import axios from 'axios';
// const axios = require('axios');


/*const isLogin = sessionStorage.getItem("user");

if (isLogin) {
    window.location.replace('http://localhost:5500/dashboard.html');
}

const franceTimezone = 'Europe/Paris';
const currentDate = new Date();
const options = { timeZone: franceTimezone };
const formattedDate = currentDate.toLocaleString('en-US', options);
console.log('Current date and time in France:', formattedDate);

// axios.get('/user?ID=12345').then(json=>console.log(json))

// axios.get('')

// axios.put( '', {  lkjflsd })

    axios.get('https://jsonplaceholder.typicode.com/todos');


*/

function check(form) {
    if (form.email.value == "123" && form.password.value == "123") {
        // window.location.href = 'http://localhost:5500/dashboard.html';
        window.location.replace('http://localhost:5500/dashboard.html');
        //sessionStorage.setItem("user", form.email.value);
    }
    else {
        alert("Incorrect UserName or Bad Password");
    }
}

