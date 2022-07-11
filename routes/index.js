var express = require('express');
var router = express.Router();
const axios = require('axios');

var data = {
  coord: { lon: -97.7431, lat: 30.2672 },
  weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
  base: 'stations',
  main: {
    temp: 37.79,
    feels_like: 44.79,
    temp_min: 35.6,
    temp_max: 40.18,
    pressure: 1010,
    humidity: 44
  },
  visibility: 10000,
  wind: { speed: 1.34, deg: 180, gust: 2.68 },
  clouds: { all: 0 },
  dt: 1657557752,
  sys: {
    type: 2,
    id: 2003218,
    country: 'US',
    sunrise: 1657539434,
    sunset: 1657589719
  },
  timezone: -18000,
  id: 4671654,
  name: 'Austin',
  cod: 200
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data:data});
});
router.get('/home', function(  req, res, next) {
  res.render('index',{data:data})
})
router.get('/submit',function(req,res){
  const city = req.query.city
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d9adcd8f0f5e232ef5e0b833666952fb`;
  axios.get(url_api)
  .then(function (response) {
    res.render('index',{data:response.data})
    console.log(response.data)
  })
  .catch(function (error) {
    res.send(error)
  })
})

module.exports = router;
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//d9adcd8f0f5e232ef5e0b833666952fb