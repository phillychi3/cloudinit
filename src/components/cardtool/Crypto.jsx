import useBinanceTicker from '../../hooks/useokx'
import Svg from './Loading'
import Card from '../Card'
import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Crypto = ({coin}) => {
  const ticker = useBinanceTicker(coin)
  const lastPrice = useRef()
  const [color, setColor] = useState('none')

  useEffect(() => {
    if (ticker) {
      const currentPrice = parseInt(ticker.p)
      setColor(currentPrice < lastPrice.current ? '#2ecc71' : '#e74c3c')
      setTimeout(() => {
        lastPrice.current = currentPrice
      }, 0)
    }
  }, [ticker])

  return (
    <Card
      element={
        ticker ? (
          <div>
            <p>{coin.toUpperCase()}</p>
            <p>最新成交價：{parseInt(ticker.p).toFixed(1)}</p>
          </div>
        ) : (
          <Svg />
        )
      }
      color={color}
    />
  )
}
Crypto.propTypes = {
  coin: PropTypes.string
}

export default Crypto
