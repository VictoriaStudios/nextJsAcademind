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

  const [locationData, setLocationData] = useState ({
    locality: "Washington"
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
            })
          })
          .catch ((error) => console.log (error))
          getCityName (pos)
          .catch ((error) => console.log (error))
        }
      }
      else {
        console.log ("Cannot get geolocation")
      }

      function getCityName (pos) {
        return new Promise ((resolve, reject) => {
          fetch (`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`)
          .then ((response) => {
            response.json().then ((data) =>  {
              setLocationData(data)
            })
          })
          .catch ((error) => reject (error))
        })
      }
      

    }
    getWeatherData()

  }, [])
  

  return (
    <>
      <Weather weatherData={weatherData} locationData={locationData} />
    </>
  )
}

export default HomePage