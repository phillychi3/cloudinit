import React from 'react'

export default function useVtuber() {
  const [state, setState] = React.useState({
    loading: true,
    vtuberdata: null,
    error: null
  })
  const processdate = (data) => {
    const threeDaysAgo = Date.now() + 3 * 24 * 60 * 60 * 1000
    let newdata = data.filter(
      (item) =>
        item.timestamp != null ||
        (item.islive === true &&
          new Date(item.timestamp).getTime() >= threeDaysAgo)
    )
    newdata = newdata.sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    })

    return newdata
  }
  React.useEffect(() => {
    const success = (vtuberdata) => {
      try {
        vtuberdata = processdate(vtuberdata)
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
        vtuberdata: vtuberdata
      })
    }

    const error = (error) => {
      setState((s) => ({
        ...s,
        loading: false,
        error
      }))
    }
    const vtuber_static =
      'https://raw.githubusercontent.com/DDHelper-team/static-live-api/data/live.json'
    fetch(vtuber_static)
      .then((res) => {
        return res.json()
      })
      .then((vtuberdata) => {
        success(vtuberdata)
      })
      .catch(error)
  }, [])
  return state
}
