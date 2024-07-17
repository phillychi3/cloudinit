import React from 'react'


//將資料分成一天
//一天內的最高與最低溫紀錄下來
//平均一天的降雨機率

export default function useWeather(location) {
  const [state, setState] = React.useState({
    loading: true,
    weather: null,
    forecast: null,
    error: null
  })
  const processdate = (date) => {
    let days = {}
    for (let i = 0; i < date.list.length; i++) {
      let d = new Date(date.list[i].dt * 1000)
      let day = `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
      if (!days[day]) {
        days[day] = []
      }
      days[day].push(date.list[i])
    }
    let rtdata = {}
    for (let day in days) {
      const { max, min, rain } = days[day].reduce(
        (acc, curr) => {
          return {
            max: Math.max(acc.max, curr.main.temp_max),
            min: Math.min(acc.min, curr.main.temp_min),
            rain: acc.rain + curr.pop * 100
          }
        },
        { max: -100, min: 100, rain: 0 }
      )

      rtdata[day] = {
        max: max.toFixed(1),
        min: min.toFixed(1),
        rain: (rain / days[day].length).toFixed(1),
        icon: days[day][0].weather[0].icon
      }
    }
    return rtdata
  }
  React.useEffect(() => {
    const success = (forecast, weather) => {
      if (
        forecast.cod.toString() !== '200' ||
        weather.cod.toString() !== '200'
      ) {
        setState((s) => ({
          ...s,
          loading: false,
          error: '401'
        }))
        return
      }
      try {
        forecast = processdate(forecast)
      } catch (e) {
        setState((s) => ({
          ...s,
          loading: false,
          error: 'process error'
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
      const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=ffd9818a303f06784b81bc37127cf92c`
      const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=ffd9818a303f06784b81bc37127cf92c#`
      Promise.all([fetch(forecast), fetch(weather)])
        .then(([res1, res2]) => {
          return Promise.all([res1.json(), res2.json()])
        })
        .then(([forecast, weather]) => {
          success(forecast, weather)
        })
        .catch(efrror)
    }
  }, [location])
  return state
}
