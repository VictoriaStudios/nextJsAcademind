import Image from "next/image"


function WeatherSymbol(props) {
  return (
    <>
        <Image 
        src="/weather-01.png"
        alt="Sun Icon"
        width="256"
        height="256"
        />
    </>
  )
}

export default WeatherSymbol