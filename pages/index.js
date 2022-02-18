import {useEffect, useState} from 'react'
import Weather from "../components/Weather"
import { apiKey } from '../utils/apiKey'



function HomePage() {
  const [pos, setPos] = useState (null)



  useEffect(() => {
    function getWeatherData() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition)
        function setPosition (pos) {
          setPos (pos)
        }
      }
      if (pos !== null) {
        fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&exclude=minutely,hourly&appid=${apiKey}`)
        .then ((response) => {
          response.json().then ((data) => console.log (data))
        })
        .catch ((error) => console.log (error))
      }
    }
    getWeatherData()

  }, [])
  

  return (
    <>
      <Weather />
    </>
  )
}

export default HomePage