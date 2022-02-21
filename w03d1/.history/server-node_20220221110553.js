const http = require('http');
const port = 3001;

const server = http.createServer((request,response) => {

  console.log('a request has been made.');

//  console.log('request',request);
  console.log('request.url',request.url);

  if (request.url === '/') {
    response.statusCode = 200;
    response.write(`
    <html>
    <head>
    <title>This Is The HomePage!</title>
    </head>
    <body>
    <h2>Hello, World!</h2>
    </body>
    </html>
    `);
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