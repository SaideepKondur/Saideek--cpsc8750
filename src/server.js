// use the express library
const express = require('express');

// create a new server application
const app = express();



const cookieParser = require('cookie-parser');

// Define the port we will listen on
// (it will attempt to read an environment global
// first, that is for when this is used on the real
// world wide web).
const port = process.env.PORT || 3000;



const {encode} = require('html-entities');

const date = new Date();
console.log(date.toLocaleString('en-US'));



// The main page of our website
app.get('/', (req, res) => {
  res.cookie('visited', Date.now().toString())
  const name = req.query.name || "World";



  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>An Example Title</title>
        <link rel="stylesheet" href="app.css">
      </head>
      <body>
        <h1>Hello, ${encode(name)}</h1>
        <h1> This site was accessed at, ${encode(date)}
        <p>HTML is so much better than a plain string!</p>
      </body>
    </html>

    
  `)
});




app.get('/', (req, res) => {  
  res.render('welcome', {
    name: req.query.name || "World",
  });
});



// Start listening for network connections
app.listen(port);

// Printout for readability
console.log("Server Started!");




app.use(express.static('public'));



app.set('view engine', 'ejs');



let nextVisitorId = 1;

app.get('/', (req, res) => {
  res.cookie('visitorId', nextVisitorId++);
  res.cookie('visited', Date.now().toString());
  res.render('welcome', /* params */)
});
app.use(cookieParser());




var cookieParser = require('cookie-parser');
var PORT = 3000;
app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});