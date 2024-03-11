import useLocation from '../../hooks/uselocation'
import useWeather from '../../hooks/useweather'
import Svg from './Loading'
const Weathercard = (data) => {
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
        <p>{data.weather.main.temp.toFixed(1)}°C</p>
        <p>濕度{data.weather.main.humidity}%</p>
        <p>降雨機率</p>
      </div>
      <div className="weather-forecast">
        {Object.keys(data.forecast).map((day) => (
          <div key={day} className="weather-forecast-day">
            <div className='weather-day'>
              <span>{day}</span>
              <img
                src={`http://openweathermap.org/img/wn/${data.forecast[day].icon}.png`}
                alt={data.forecast[day].description}
              />
              <span>
                {data.forecast[day].max}°C/{data.forecast[day].min}°C
              </span>
              <span>降雨機率 {data.forecast[day].rain}%</span>
            </div>
          </div>
        ))
        }
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
        <Svg />
      ) : weather.error ? (
        weather.error
      ) : (
        <Weathercard {...weather} />
      )}
    </div>
  )
}
export default Weather
