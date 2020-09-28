/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
const path = require('path');
const fs = require('fs');
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename).base);
// console.log(path.join(__dirname, '3-web-server', 'hello.html'));
// console.log(fs);
// //create a server
const server = http.createServer((req, res) => {
  console.log(req.url);
  // fs.readFile('index.html', (err, content) => {
  //   if (err) throw err;
  //   res.writeHead(200, { 'content-type': 'text/html' });
  //   res.end(content);
  // });

  if (req.url === '/') {
    fs.readFile('index.html', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(content, 'utf8');
    });
  }
  if (req.url === '/index.js') {
    fs.readFile('index.js', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'content-type': 'text/js' });
      res.end(content, 'utf8');
    });
  }
  if (req.url === '/style.css') {
    fs.readFile('style.css', (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'content-type': 'text/css' });
      res.end(content, 'utf8');
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// let server = http.createServer(function (req, res) {
//   // YOUR CODE GOES IN HERE
//   res.write('Hello World!'); // Sends a response back to the client
//   res.end(); // Ends the response
// });

// server.listen(3000); // The server starts to listen on port 3000
