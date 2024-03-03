import useLocation from '../../hooks/uselocation'
import useWeather from '../../hooks/useweather'

const Weathercard = (data) => {
  console.log(data)
  return (
    <div className="weather-card">
      <span>
        {data.weather.name} city, {data.weather.sys.country}
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather.weather[0].icon}.png`}
        alt={data.weather.weather[0].description}
      />
      <div className="weather-description">
        <p>{data.weather.main.temp}°C</p>
        <p>濕度{data.weather.main.humidity}</p>
        <p>降雨機率</p>
      </div>
    </div>
  )
}

const Weather = () => {
  const state = useLocation()
  const weather = useWeather(state)

  return (
    <div className="weather">
      {weather.loading ? (
        'Loading...'
      ) : weather.error ? (
        weather.error
      ) : (
        <Weathercard {...weather} />
      )}
    </div>
  )
}
export default Weather
