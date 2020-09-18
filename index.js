import './style.css';



const appDiv = document.getElementById('app');
const selOption = document.getElementById('cSelect') 
const aClient = document.getElementById('aClient')

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

function buildForm() {
  var a = document.createElement("FORM")
  var b = document.createElement("INPUT")
  var c = document.createElement("INPUT")

  a.setAttribute("method", "get")
  b.setAttribute("value", "", "id", "cName")
  c.setAttribute("type", "button")
  c.setAttribute("value", "click")
  c.setAttribute("onclick", "getText(d.value)")
  
  



function getText() {
  
  var d = document.getElementById("cName")
  
  console.log(d.value)
  
}

aClient.appendChild(a)
aClient.appendChild(b)
aClient.appendChild(c)

}
buildForm()


