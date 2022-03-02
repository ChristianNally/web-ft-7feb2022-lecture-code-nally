const express = require('express');
const port = 3211;

// create an express app
const app = express();

// use the ejs template engine
app.set('view engine','ejs');

// a place from which we can serve static files
app.use(express.static('public'));


// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3211');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});



// routes are sequential. if the app finds one that matches, it will use that one.
app.get('/',(req,res)=>{
  res.status(200).render('index'); // send views/index.ejs as the response
});

app.get('*',(req,res)=>{
  console.log('404 route called.');
  res.status(404).render('404');
  res.end();
});

// have the app listen on the port
app.listen(port,console.log(`Server is listening on port ${port}`));
