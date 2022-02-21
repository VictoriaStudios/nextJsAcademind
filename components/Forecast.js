import WeatherSymbol from "./WeatherSymbol"

function Forecast(props) {
    const data = props.dayWeather
    return (
        <>
            <WeatherSymbol dayWeather={data}/>
        </>

    )
}

export default Forecast