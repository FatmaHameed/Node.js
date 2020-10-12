const express = require('express');
const app = express();
// require file system packages
const fs = require('fs');

// Parse the json data
app.use(express.json());

// 1- create a blog with title and content
app.post('/blogs', (req, res) => {
  let newBlog = {
    title: req.body.title,
    content: req.body.content,
  };

  fs.writeFileSync(newBlog.title, newBlog.content);
  res.end('ok');
});

// 2- Update the post

app.put('/blogs/:title', (req, res) => {
  // put conditionality if the file is exist, or the parameter of the url is correct
  if (fs.existsSync(req.params.title)) {
    fs.writeFileSync(req.body.title, req.body.content);
    res.end('ok');
  } else {
    // Send response with error message
    res.status(404);
    res.end('This blog does not exist!');
  }
});
//3- Delete blogs
app.delete('/blogs/:title', (req, res) => {
  // Add condition here
  if (fs.existsSync(req.params.title)) {
    fs.unlinkSync(req.params.title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(404);
    res.end('This blog does not exist!');
  }
});

//Reading blog
app.get('/blogs/:title', (req, res) => {
  // check if blog exists
  if (fs.existsSync(req.params.title)) {
     //store the existing blog to variable
  const blog = fs.readFileSync(req.params.title);
    //send the blog
    res.send(blog);
  } else {
    res.status(404);
    res.end('This blog does not exist!');
  }
});
app.listen(3000);
