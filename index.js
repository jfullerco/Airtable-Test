
//import fetch from 'node-fetch'
import './style.css';



const appDiv = document.getElementById('app');
 


fetch("https://tiems-d1ca.restdb.io/rest/clients", {
	"method": "GET",
	"headers": {
		"x-apikey": "5f2c8c05013b1c34acef749b"
	}
})
.then(res => res.json())
.then(data => {
 return listClients(data) }

)
function listClients(data) {
  for (var i = 0; i < data.length; i++) {
  //console.log(data[i])
  var div = document.createElement("div")
  div.innerHTML = data[i]._id
  appDiv.appendChild(div)
  }
}
