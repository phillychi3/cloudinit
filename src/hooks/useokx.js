import { useState, useEffect, useRef } from 'react'

const useBinanceTicker = (instId) => {
  const [ticker, setTicker] = useState(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${instId}`)

    socket.onopen = () => {
      console.log('WebSocket 已連接' + instId)
      const subscribeMessage = {
        method: 'SUBSCRIBE',
        params: [`${instId}@aggTrade`],
        id: 1
      }
      socket.send(JSON.stringify(subscribeMessage))
    }

    socket.onmessage = (event) => {
      if (JSON.parse(event.data).id === 1) return
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          setTicker(JSON.parse(event.data))
          timeoutRef.current = null
        }, 1000)
      }
    }

    socket.onclose = () => {
      clearTimeout(timeoutRef.current)
      console.log('WebSocket 已斷開連接' + instId)
    }

    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close()
      }
    }
  }, [instId])

  return ticker
}

export default useBinanceTicker
