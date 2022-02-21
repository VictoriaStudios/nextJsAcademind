import Image from "next/image"


function WeatherSymbol(props) {
  const id = props.dayWeather.weather[0].id
  const data = props.dayWeather
  let nightTime = false
   if (data.dt > data.sunset) nightTime= true
  let imgWidth = "256"
  let imgHeight = "256"
  if (props.imgWidth !== undefined ) imgWidth = props.imgWidth
  if (props.imgHeight !== undefined ) imgHeight = props.imgHeight
  let imgSrc = "/weather-01.png"
  if (id<300) imgSrc = "/weather-09.png"
  else if (id >= 300 && id < 500) imgSrc = "/weather-04.png"
  else if (id >= 500 && id < 600) imgSrc = "/weather-06.png"
  else if (id >= 600 && id < 700) imgSrc = "/weather-08.png"
  //find an icon for haze and tornado
  else if (id >= 700 && id < 800) imgSrc = "/weather-08.png"
  else if (id === 800) {
    if (nightTime === false) imgSrc = "/weather-01.png"
    else  imgSrc = "/weather-01-n.png"
  } 
  else if (id > 800 && id < 803) {
    if (nightTime === false) imgSrc = "/weather-02.png"
    else imgSrc = "/weather-02-n.png"
  }
  else if (id >= 803) {
    if (nightTime === false) imgSrc = "/weather-03.png"
    else imgSrc = "/weather-03-n.png"
  }
  
  return (
    <>
        <Image 
        src={imgSrc}
        alt="Sun Icon"
        width={imgWidth}
        height={imgHeight}
        />
    </>
  )
}

export default WeatherSymbol