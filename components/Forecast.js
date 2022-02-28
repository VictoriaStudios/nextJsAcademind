import useIdToWeatherString from "../utils/useIdToWeatherString"
import useToCelsius from "../utils/useToCelsius"
import WeatherSymbol from "./WeatherSymbol"


function Forecast(props) {
    const data = props.dayWeather


    return (
        <>
            <div style={{height:"100%"}}>
                {props.index === 0 ? (
                    <div>Tomorrow</div>
                ) : ('')}
                {props.index === 1 ? (
                    <div>in 2 Days</div>
                ) : ('')}
                {props.index === 2 ? (
                    <div>in 3 Days</div>
                ) : ('')}

                <div>{(useToCelsius(data.temp.day))}°C / {data.humidity}%</div>
                <WeatherSymbol dayWeather={data} imgWidth={props.imgWidth} imgHeight={props.imgHeight} className="forecastSymbol" />
                <div>{useIdToWeatherString(data.weather[0].id)} </div>
            </div>
        </>

    )
}

export default Forecast