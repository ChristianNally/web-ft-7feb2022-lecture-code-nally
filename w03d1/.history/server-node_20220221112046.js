const http = require('http');
const fs = require('fs');
const path = require('path');
const todos = require('./db/todos.js');

const port = 3001;

const server = http.createServer((request,response) => {

  console.log('a request has been made.');

//  console.log('request',request);
  console.log('request.url',request.url);

  if (request.url === '/') {

    filepath = path.join(__dirname,'views','index.html');
    console.log('retrieving view from:' + filepath);

    fs.readFile(filepath,'utf8',(err, fileContent)=>{
      if (err) {
        response.statusCode = 500;
        response.write(err.message);
        response.end();
      } else {
        response.statusCode = 200;
        response.write(fileContent);
        response.end();
      }
    });
  } else if (request.url === '/todos') {
    response.statusCode = 200;

    const textOutput = JSON.stringify(todos);
    response.write(textOutput);
    response.end();
  }
  else {
    response.statusCode = 404;
    response.write('NOT FOUND!');
    response.end();
  }

});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});