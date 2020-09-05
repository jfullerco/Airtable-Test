
//import fetch from 'node-fetch'
import './style.css';



const appDiv = document.getElementById('app');
 


fetch("https://tiems-d1ca.restdb.io/rest/clients", {
	"method": "GET",
	"headers": {
		"x-apikey": "11a5b5d7052c116ebf744abb41855b163c317"
	}
})
.then(response => {
	return response
  console.log(response);
})
.then(data => {

const client = data(Client_Name)

})
.catch(err => {
	console.log(err);
});

function client(data) {

  appDiv.innerHTML = data(Client_Name)
}



