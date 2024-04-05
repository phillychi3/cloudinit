import Time from '../components/cardtool/Time'
import Weather from '../components/cardtool/Weather'
import Crypto from '../components/cardtool/Crypto'

const Cards = {
  time: {
    name: 'time',
    func: Time
  },
  weather: {
    name: 'weather',
    func: Weather
  },
  crypto: {
    name: 'crypto',
    coin: 'btcusdt',
    func: Crypto
  }
}

export default Cards
