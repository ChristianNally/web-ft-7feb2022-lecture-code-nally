const http = require('http');
const port = 3001;

const server = http.createServer((request,response) => {

  console.log('a request has been made.');

//  console.log('request',request);
  console.log('request.url',request.url);

  if (request.url === '/') {
    response.statusCode = 200;
    response.write('Hello, World!');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('NOT FOUND!');
    response.end();
  }

});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});