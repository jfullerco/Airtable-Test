// Import stylesheets
import './style.css';



const appDiv = document.getElementById('app');
 

//Airtable

const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'key7XQ8Is5o6z82BJ' }).base(
    'app3v5MjJ1b1OGZ1f'
);

const table = base('Clients');

base('Clients').select({
   
    
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    
    records.forEach(function(record) {
       
    var custname = record.get('Client_Name') 

    appDiv.innerHtml = ("<p>"+ custname +"</p>")
    });
    
});





