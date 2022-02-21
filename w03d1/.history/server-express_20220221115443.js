const express = require('express');
const port = 3002;

const app = express();
app.set('view engine','ejs');

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});