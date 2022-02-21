const http = require('http');
const port = 3001;

const server = http.createServer((request,response) => {

  console.log('a request has been made.');

  response.statusCode = 200;
  response.write('Hello, World!');
  response.end();

});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});