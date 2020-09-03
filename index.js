
import fetch from 'node-fetch'
import './style.css';



const appDiv = document.getElementById('app');
 


fetch("https://joke3.p.rapidapi.com/v1/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "joke3.p.rapidapi.com",
		"x-rapidapi-key": "6ae9ccd8d4msha612d4fbe46ad0dp157a6ajsn13ad227dfd72"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});





