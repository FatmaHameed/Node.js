/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');

// const path = require('path');
const fs = require('fs');

// create validate function
function validate(filePath, contentType) {
  if (req.url === `'/${filePath}'`) {
    fs.readFile(`'${filePath}'`, (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'content-Type': contentType });
      res.end(content, 'utf8');
    });
  }
}

// //create a server
const server = http.createServer((req, res) => {
  validate(index.html, 'text/html');
  validate(index.js, 'text/js');
  validate(style.css, 'text/css');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
// let server = http.createServer(function (req, res) {
//   // YOUR CODE GOES IN HERE
//   res.write('Hello World!'); // Sends a response back to the client
//   res.end(); // Ends the response
// });

// server.listen(3000); // The server starts to listen on port 3000
