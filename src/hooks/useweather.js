import React from 'react'

const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=23.701156&lon=120.5405259&units=metric&appid=ffd9818a303f06784b81bc37127cf92c`
const weather = `https://api.openweathermap.org/data/2.5/weather?lat=23.701156&lon=120.5405259&units=metric&appid=ffd9818a303f06784b81bc37127cf92c#`

const processdate = (date) => {
}

export default function useWeather(location) {
  const [state, setState] = React.useState({
    loading: true,
    weather: null,
    forecast: null,
    error: null
  })

  React.useEffect(() => {
    const success = (forecast,weather) => {
      console.log(forecast,weather)
      if (forecast.cod.toString() !== '200' || weather.cod.toString() !== '200') {
        setState((s) => ({
          ...s,
          loading: false,
          error: '401'
        }))
        return
      }
      setState({
        loading: false,
        weather: weather,
        forecast: forecast
      })
    }
    const efrror = (error) => {
      setState((s) => ({
        ...s,
        loading: false,
        error
      }))
    }
    if (!location.loading && !location.error) {
      Promise.all([
        fetch(forecast),fetch(weather)
      ])
      .then(([res1,res2]) => {
        return Promise.all([res1.json(),res2.json()])
      }
      )
      .then(([forecast,weather]) => {
        success(forecast,weather)
      })
      .catch(efrror)

    }
  }, [location])
  return state
}
