const express = require('express');
const todos = require('./db/todos.js');
const port = 3002;

const app = express();
app.set('view engine','ejs'); // sets the template engine

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/todos', () => {
  res.send(JSON.stringify(todos));
  res.end();
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});