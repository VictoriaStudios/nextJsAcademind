import {useEffect, useState} from 'react'
import Weather from "../components/Weather"
import { apiKey } from '../utils/apiKey'



function HomePage() {
  let pos = null
  const [weatherData, setWeatherData] = useState ({
    current: {
      temp:0,
      humidity:0,
      weather:[
        {
          id:800
        }
      ]
    }
  })



  useEffect(() => {
    function getWeatherData() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition)
        function setPosition (pos) {
          fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&exclude=minutely,hourly&appid=${apiKey}`)
          .then ((response) => {
            response.json().then ((data) =>  {
              setWeatherData(data)
              console.log (data)
            })
          })
          .catch ((error) => console.log (error))
        }
      }
      else {
        console.log ("Cannot get geolocation")
      }
      

    }
    getWeatherData()

  }, [])
  

  return (
    <>
      <Weather weatherData={weatherData} />
    </>
  )
}

export default HomePage