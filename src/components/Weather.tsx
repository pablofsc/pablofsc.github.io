import { useState, useEffect } from 'react'

interface weatherForecast {
    city: string,
    condition: string,
    temperature: number,
    iconURL?: string
}

function Weather() {
    const [forecast, setForecast] = useState<weatherForecast>()

    useEffect(() => {
        fetch('https://api.weatherapi.com/v1/current.json?key=b271dab7f75b4ff586c184614220405&q=Brasilia&aqi=no')
            .then(response => response.json())
            .then(response => {
                setForecast({
                    city: response.location.name,
                    condition: response.current.condition.text,
                    temperature: response.current.temp_c,
                    iconURL: response.current.condition.icon
                })
            })
    }, [])

    if (forecast) {
        return (
            <div className='topBarItem hasDefaultBackground fades tridimensional'>
                <div className='currentTemp'>
                    {forecast.temperature} °C
                </div>
                <img src={forecast.iconURL} style={{ margin: '0 10px' }} />
                <div>
                    {forecast.city}
                    <br />
                    {forecast.condition}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='topBarItem hasDefaultBackground hasTransitionAnimation'>
                error fetching weather forecast
            </div>
        )
    }
}
export default Weather