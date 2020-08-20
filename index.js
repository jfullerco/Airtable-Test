// Import stylesheets
import './style.css';



const appDiv = document.getElementById('app');
const appDiv = "<script>JS</script>";

//Airtable

const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'key7XQ8Is5o6z82BJ' }).base(
    'appX0EmdjgQnGuNKI'
);

const table = base('Customers');

base('Customers').select({
    view: 'Customer Info'
    
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    
    records.forEach(function(record) {
        
      const custname = record.get('Customer Name'); 



    });
});





