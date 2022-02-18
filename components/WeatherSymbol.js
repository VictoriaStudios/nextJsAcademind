import Image from "next/image"


function WeatherSymbol(props) {
  const data = props.weatherData
  const id = data.current.weather[0].id
  let imgSrc = "/weather-01.png"
  if (id<300) imgSrc = "/weather-09.png"
  else if (id >= 300 && id < 500) imgSrc = "/weather-04.png"
  else if (id >= 500 && id < 600) imgSrc = "/weather-06.png"
  else if (id >= 600 && id < 700) imgSrc = "/weather-08.png"
  //find an icon for haze and tornado
  else if (id >= 700 && id < 800) imgSrc = "/weather-08.png"
  else if (id === 800) imgSrc = "/weather-01.png"
  else if (id > 800 && id < 803) imgSrc = "/weather-02.png"
  else if (id >= 803) imgSrc = "/weather-03.png"
  return (
    <>
        <Image 
        src={imgSrc}
        alt="Sun Icon"
        width="256"
        height="256"
        />
    </>
  )
}

export default WeatherSymbol