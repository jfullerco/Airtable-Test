// Import stylesheets
import './style.css';
import 'jquery'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;



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
        document.getElementById('rwCustomers').innerText('Retrieved', record.get('Company Name'));
    });
});
