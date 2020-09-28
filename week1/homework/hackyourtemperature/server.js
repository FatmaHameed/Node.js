const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
