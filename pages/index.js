import {useEffect, useState} from 'react'
import Weather from "../components/Weather"
import { apiKey } from '../utils/apiKey'



function HomePage() {
  
  let pos = null
  const now = Date.now()
  const [weatherData, setWeatherData] = useState ({
    current: {
      sunrise:0,
      dt:now,
      sunset:2,
      temp:290,
      humidity:0,
      weather:[
        {
          id:701
        }
      ]
    },
    daily: [{
      sunrise:0,
      dt:now/1000,
      sunset:2,
      temp:{
        day:290
      },
      humidity:0,
      weather:[
        {
          id:800
        }
      ]
    },
    {
      sunrise:0,
      dt:now/1000,
      sunset:2,
      temp:{
        day:290
      },
      humidity:0,
      weather:[
        {
          id:502
        }
      ]
    },
    {
      sunrise:0,
      dt:now/1000,
      sunset:2,
      temp:{
        day:290
      },
      humidity:0,
      weather:[
        {
          id:601
        }
      ]
    },
    {
      sunrise:0,
      dt:now/1000,
      sunset:2,
      temp:{
        day:290
      },
      humidity:0,
      weather:[
        {
          id:800
        }
      ]
    },],
    nightTime : false,
  })
  const [landscape, setLandscape] =  useState(false)
  const [height400, setHeight400] = useState (false)

  const [locationData, setLocationData] = useState ({
    locality: "Washington",
    countryName: "USA",
  })



  useEffect(() => {

    const landscapeHandler = e => {
      console.log ("Change in landscape")
      setLandscape({matches: e.matches});
    }
    
    const heightHandler = e => setHeight400({matches: e.matches});

    function getWeatherData() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition)
        function setPosition (pos) {
          fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&exclude=minutely,hourly&appid=${apiKey}`)
          .then ((response) => {
            response.json().then ((data) =>  {
              //if (data.daily.length > 3) data.daily.length=3
              setWeatherData(data)
            })
          })
          .catch ((error) => console.log (error))
          getCityName (pos)
          .catch ((error) => console.log (error))
        }
      }
      else {
        console.log ("Cannot get geolocation")
      }

      function getCityName (pos) {
        return new Promise ((resolve, reject) => {
          fetch (`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`)
          .then ((response) => {
            response.json().then ((data) =>  {
              setLocationData(data)
              resolve()
            })
          })
          .catch ((error) => reject (error))
        })
      }
      

    }
    getWeatherData()
    window.matchMedia("((orientation:landscape)").addEventListener('change', landscapeHandler);
    window.matchMedia("(min-height:400px)").addEventListener('change', heightHandler);

    return () => {
      window.removeEventListener('change', landscapeHandler);
      window.removeEventListener('change', heightHandler);
    }
  }, [])
  

  return (
    <>
      <Weather weatherData={weatherData} locationData={locationData} landscape={landscape} height400={height400}/>
    </>
  )
}

export default HomePage