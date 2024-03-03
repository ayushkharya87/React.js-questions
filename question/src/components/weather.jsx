import React, { useEffect, useState } from 'react'

const weather = () => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid={API key}`)
                .then((res) => res.json())
                .then((data) => setWeather(data))
            })
        }
    }, []);

  return (
    <div>
        {
            weather ? (
                <div>
                    <h2>Current weather</h2>
                    <p>Tem: {weather.main.temp}</p>
                    <p>condition: {weather.weather[0].description}</p>
                </div>
            ) : <p>Loading...</p>
        }
    </div>
  )
}

export default weather