import {useEffect} from 'react'
import Weather from "../components/Weather"
import { getWeatherData } from '../utils/openWeatherHandler'

function HomePage() {
  useEffect(() => {
    function updateWeather() {
      getWeatherData()
      .then ((result) => console.log (result))
      .catch ((error) => console.log (error))
    }
    updateWeather()

  }, [])
  

  return (
    <>
      <h1>Arequipa Weather</h1>
      <Weather />
    </>
  )
}

export default HomePage