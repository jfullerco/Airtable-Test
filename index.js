// Import stylesheets
import Airtable from 'airtable'
import './style.css';



const appDiv = document.getElementById('app');
 

//Airtable


const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'key7XQ8Is5o6z82BJ' }).base(
    'app3v5MjJ1b1OGZ1f'
);

fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "6ae9ccd8d4msha612d4fbe46ad0dp157a6ajsn13ad227dfd72",
		"accept": "application/json"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});





