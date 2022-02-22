import { formatDistance } from "date-fns"
import { useEffect } from "react"
import useIdToWeatherString from "../utils/useIdToWeatherString"
import useToCelsius from "../utils/useToCelsius"
import WeatherSymbol from "./WeatherSymbol"


function Forecast(props) {
    const data = props.dayWeather
    const now = Date.now()
    useEffect(() => {
        console.log(
            `Now: ${now}, dt:${data.dt}, distance: ${formatDistance(data.dt * 1000, now, { addSuffix: true })}`
        )
    })



    return (
        <>
            <div>
                {props.index === 0 ? (
                    <div>Tomorrow</div>
                ) : (
                    <div>{formatDistance(data.dt * 1000, now, { addSuffix: true })}</div>
                )}

                <div>{(useToCelsius(data.temp.day))}°C / {data.humidity}%</div>
                <WeatherSymbol dayWeather={data} imgWidth={props.imgWidth} imgHeight={props.imgHeight} className="forecastSymbol" />
                <div>{useIdToWeatherString(data.weather[0].id)} </div>
            </div>
        </>

    )
}

export default Forecast