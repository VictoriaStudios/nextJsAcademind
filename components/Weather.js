import React from 'react'
import WeatherSymbol from './WeatherSymbol'

function Weather(props) {
  return (
    <>
      <section>
        <div className="outerWrapper">
            <div className="innerWrapper">
                <div className="weatherSymbol">
                  <WeatherSymbol/>
                </div>
                <div className="basicInfos">Basic Info</div>
                <div className="secondRow">Second Row</div>
                <div className="thirdRow">Third Row</div>
 
            </div>
        </div>
      </section>
    </>
  )
}

export default Weather