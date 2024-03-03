import React from 'react'

export default function useLocation() {
  const [state, setState] = React.useState({
    loading: true,
    latitude: null,
    longitude: null,
    timestamp: null,
    error: null
  })

  React.useEffect(() => {
    const success = ({ coords, timestamp }) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    }
    const error = (error) => {
      setState((s) => ({
        ...s,
        loading: false,
        error
      }))
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }, [])

  return state
}
