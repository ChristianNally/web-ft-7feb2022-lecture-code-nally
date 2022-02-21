const http = require('http');
const port = 3001;

const server = http.createServer();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});