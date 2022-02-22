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
            `Now: ${now}, dt:${data.dt}, distance: ${formatDistance(now, data.dt*1000)}`
        )
    })



    return (
        <>
            <div>
                <div>{(useToCelsius(data.temp.day))}°C / {data.humidity}%</div>
                <WeatherSymbol dayWeather={data} className="forecastSymbol" />
                <div>{useIdToWeatherString(data.weather[0].id)} </div>
            </div>
        </>

    )
}

export default Forecast