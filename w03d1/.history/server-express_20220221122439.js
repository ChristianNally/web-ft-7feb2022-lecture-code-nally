const express = require('express');
const todos = require('./db/todos.js');
const port = 3002;

const app = express();
app.set('view engine','ejs'); // sets the template engine

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/todos', (req,res) => {
  const templateVars = {
    todos: todos
  };
  res.render('todos', templateVars);
});

app.post('/todos', (req,res) => {
  res.send('This is where I would write code to insert a new TODO');
  res.end();
});

app.get('*', (req,res) => {
  res.render('404');
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});