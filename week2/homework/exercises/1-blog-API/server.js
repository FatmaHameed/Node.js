const express = require('express');
const app = express();

const fs = require('fs');
app.use(express.json());

// YOUR CODE GOES IN HERE
// 1- create a blog with title and content
app.post('/blogs', (req, res) => {
  // How to get the title and content from the request??

  let newBlog = {
    // id: id,
    title: req.body.title,
    content: req.body.content,
  };

  fs.writeFileSync(newBlog.title, newBlog.content);
  res.end('ok');
});
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// 2- Update the post

app.put('/blogs/:title', (req, res) => {
  // How to get the title and content from the request?
  // What if the request does not have a title and/or content?
  // console.log(req.body.title);
  // console.log(req.params.title);
  if (fs.existsSync(req.params.title)) {
    // console.log(req.params.title);
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok');
  } else {
    // Send response with error message
    res.status(404);
    res.send('This post does not exist!');
  }
});
//3- Delete blogs
app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  if (fs.existsSync(req.params.title)) {
    // Add condition here
    fs.unlinkSync(req.params.title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(404);
    res.send('This post does not exist!');
  }
});

//Reading blog
app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  // check if post exists
  const post = fs.readFileSync(req.params.title);
  if (fs.existsSync(req.params.title)) {
    res.send(post);
  } else {
    res.status(404);
    res.send('This post does not exist!');
  }
  // send response
});
app.listen(3000);
