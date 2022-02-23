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
            <div className="weatherSymbol" >
              <WeatherSymbol dayWeather={data.current} imgWidth={164} imgHeight={164}/>
             
            </div>
            <div className="basicInfos">
              <h3>{useToCelsius(data.current.temp)}°C</h3>
              <h3>{data.current.humidity}% humidity</h3>
              <h3>{useIdToWeatherString(data.current.weather[0].id)}</h3>
            </div>
            <div className='secondRow'>
            <h3>{props.locationData.locality},</h3>
            <h3> {props.locationData.countryName}</h3>
            </div>
            <div className="gap"/>
            <div className="thirdRow">
              {(data.daily.slice(1, 4)).map((entry, index) => (
                <div key={`forecast${index}`} className="forecastContainer"><Forecast dayWeather={entry} imgWidth={64} imgHeight={64} index={index}/></div>
              ))}
            </div>
            <div className="bottomFill"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Weather