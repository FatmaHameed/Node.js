const express = require('express');
const app = express();
const axios = require('axios');
// require handlebars
const exphbs = require('express-handlebars');
// set the engine to handlebar in the view folder
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false })); // default layout is false which means that there is one folder contains one handlebar(not certain handlebars in nested folders)

// rendering index handlebar in '/' endpoint
app.get('/', (req, res) => {
  res.render('index');
});

// parse the data to json and encode the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create a city name from the request to the '/weather' end point
app.post('/weather', (req, res) => {
  // res.writeHead(200, { contentType: 'text/html' });
  const cityName = req.body.cityName;
  const API_KEY = require('./sources/keys.json').API_KEY;
  // console.log(API_KEY);
  axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`,
  ).then((response) => {
    console.log(response.status);
    const temperature = response.data.main.temp;
    // const city = response.data.name;
    // console.log(city);
    if (response) {
      const tempText = `The temperature in ${cityName} is ${temperature} °C`;
      res.render('index', { weatherText: tempText });
    } else {
      // console.log('not Found');
      // const text = `${city} is not found`;
      // res.end(text);
      console.log('city not found');
      res.render('index', { weatherText: 'City is not found!' });
    }
    // console.log(response.data.main.temp);
  });
  // .catch((err) => {
  //   console.log(response.status + ':' + err);
  // });
  // res.json(cityName);
  // res.end(cityName);
});
const PORT = process.env.PORT || 3000;

// listen to the port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
