import React from 'react'
import useIdToWeatherString from '../utils/useIdToWeatherString'
import useToCelsius from '../utils/useToCelsius'
import Forecast from './Forecast'
import WeatherSymbol from './WeatherSymbol'

function Weather(props) {
  const data = props.weatherData

  return (
    <>
      <section>
        <div className="outerWrapper">
          <div className="innerWrapper">
            <div className="weatherSymbol">
              <WeatherSymbol dayWeather={data.current} />
            </div>
            <div className="basicInfos">
              <h3>{useToCelsius(data.current.temp)}°C</h3>
              <h3>{data.current.humidity}% humidity</h3>
              <h3>{useIdToWeatherString(data.current.weather[0].id)}</h3>
            </div>
            <div className="secondRow">
              <h3>{props.locationData.locality}, {props.locationData.countryName}</h3>
            </div>
            <div className="thirdRow">
                {data.daily.map ((entry, index) => (
                <div key={`forecast${index}`} className="forecastContainer"><Forecast dayWeather={entry}/></div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Weather