import useLocation from '../../hooks/uselocation'
import useWeather from '../../hooks/useweather'

const Weathercard = (data) => {
  console.log(data)
  return (
    <div className="weather-card">
      <span>
        {data.weather.name} city, {data.weather.sys.country}
      </span>
    </div>
  )

}

const Weather = () => {
  const state = useLocation()
  const weather = useWeather(state)


  return (
    <div className="weather">
      <h1>Weather</h1>
      <p>
        { weather.loading
          ? 'Loading...'
          : weather.error
          ? weather.error
          : <Weathercard
              {...weather}
          />
        }
      </p>
    </div>
  )
}
export default Weather
