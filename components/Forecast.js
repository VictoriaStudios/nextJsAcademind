import WeatherSymbol from "./WeatherSymbol"

function Forecast(props) {
    const data = props.weatherData
    return (
        <>
            <WeatherSymbol weatherData={data}/>
        </>

    )
}

export default Forecast