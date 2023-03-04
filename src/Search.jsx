import React, { useState } from "react"
import axios from 'axios'

import { FaSun, FaCloud, FaCloudSun, FaCloudRain } from 'react-icons/fa'

import Quotes from "./Quotes"





export default function Search() {
  const [query, setQuery] = useState('')
  const [weatherData, setWeatherData] = useState('')
  const [submitClicked, setSubmitClicked] = useState(false)


  function handleChange(e){
    setQuery(e.target.value)
  }

  function getLatLong(city) {
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=e368322a34ce42128763dd6c61723c07`
    
    return axios.get(apiUrl)
      .then(response => {
        const { lat, lng } = response.data.results[0].geometry
        return { lat, lng }
      })
      .catch(error => {
        console.error(error)
        return null
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    getLatLong(query).then(({ lat, lng }) => {
      axios
        .get('http://localhost:3000/weather', {
          params: {
            location: `${lat},${lng}`,
          },
        })
        .then((response) => {
          // Handle the server response here
          const weather = response.data;
          const temperature = weather.temperature;
          const feelsLike = weather.feelsLikeTemperature;
          const humidity = weather.humidity
          const wind = weather.windSpeed
          const icon= weather.icon
          //set state
          setWeatherData({ temperature, feelsLike, humidity, wind ,icon })
          setSubmitClicked(true)
          
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  //setting icon 


 function WeatherIcon(icon) {
  switch (icon) {
    case "01d":
      return (
        <>
          <FaSun />
          <span> It'sa beautiful Sunny Day!!</span>
        </>
      );
    case "01n":
      return (
        <>
          <FaSun />
          <span> Starry Night!!</span>
        </>
      );
    case "02d":
      return (
        <>
          <FaCloudSun />
          <span> Day with Few Clouds</span>
        </>
      );
    case "02n":
      return (
        <>
          <FaCloudSun />
          <span> Night with few clouds</span>
        </>
      );
    case "03d":
    case "03n":
      return (
        <>
          <FaCloud />
          <span> Scattered Clouds</span>
        </>
      );
    case "04d":
    case "04n":
      return (
        <>
          <FaCloud />
          <span> Broken Clouds</span>
        </>
      );
    case "09d":
    case "09n":
      return (
        <>
          <FaCloudRain />
          <span> It Rains!!</span>
        </> 
      );
    case "10d":
    case "10n":
      return (
        <>
          <FaCloudRain />
          <span> Sprinkles! Light Rain</span>
        </>
      );
    case "11d":
    case "11n":
      return (
        <>
          <FaBolt />
          <span> Thunderstorms!!</span>
        </>
      );
    case "13d":
    case "13n":
      return (
        <>
          <FaCloud />
          <span> Snowy</span>
        </>
      );
    case "50d":
    case "50n":
      return (
        <>
          <FaCloud />
          <span> Misty</span>
        </>
      );
    default:
      return (
        <>
          <FaSun />
          <span> Nothing Special!</span>
        </>
      );
  }
}


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>What's the weather like today?</label> <br />
      <input onChange={handleChange} type="text" placeholder="Enter Location"/>
      <button type="submit">Search</button>
    </form>
    {submitClicked && (
      <div className="weather">
        {WeatherIcon(weatherData.icon)}
        <div>It's actually  : {weatherData.temperature}°C</div>
        <div>But it feels like : {weatherData.feelsLike}°C</div>
        <div>The wind is blowing at : {weatherData.wind} M/s</div>
        <div>Humidity : {weatherData.humidity}%</div>
        <Quotes icon={weatherData.icon}/>
      </div>
    )}
  </>






  )
}
