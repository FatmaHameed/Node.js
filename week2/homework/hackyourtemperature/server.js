const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  res.json(cityName);
  // res.send(cityName);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
