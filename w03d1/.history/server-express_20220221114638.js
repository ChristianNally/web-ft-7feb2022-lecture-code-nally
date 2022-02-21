const express = require('express');
const port = 3002;

const app = express();



app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});