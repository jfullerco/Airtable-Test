import './style.css';



const appDiv = document.getElementById('app');
const selOption = document.getElementById('cSelect') 


fetch("https://tiems-d1ca.restdb.io/rest/clients", {
	"method": "GET",
	"headers": {
		"x-apikey": "5f2c8c05013b1c34acef749b"
	}
})
.then(res => res.json())
//.then(data => console.log(data))
.then(data => listClients(data))
.then(listClients => data)

function listClients(data) {
  for (var i = 0; i < data.length; i++) {
  //console.log(data[i])
  var opt = document.createElement("OPTION")
  opt.label = data[i].client_name
  selOption.appendChild(opt)
  }
}