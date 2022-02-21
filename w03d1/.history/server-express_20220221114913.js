const express = require('express');
const port = 3002;

const app = express();

app.get('/', (req,res) => {
  res.status(200);
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});