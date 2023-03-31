import express from 'express'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors())

app.get('/weather', (req, res) => {
  // Get location value from URL 
  const location = req.query.location;


  if (!location) {
    res.status(400).send('Location parameter is required');
    return;
  }

  // Define API request parameters
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey =  process.env.API_KEY

  const [latitude, longitude] = location.split(',');

  const params = {
    lat: latitude,
    lon: longitude,
    appid: apiKey,
    units: 'metric',
  };

  // Make API request using Axios
  axios.get(apiUrl, { params })
    .then(response => {
      // Extract weather data from API response
      const weatherData = response.data
      const data = {
        rain: weatherData.rain ? weatherData.rain["1h"] : null,
        temperature: weatherData.main.temp,
        feelsLikeTemperature: weatherData.main.feels_like,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
        icon: weatherData.weather[0].icon,
        location: weatherData.name + ', ' + weatherData.sys.country
      };

      res.json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error getting weather data');
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000');
});

