import Time from '../components/cardtool/Time'
import Weather from '../components/cardtool/Weather'
import Crypto from '../components/cardtool/Crypto'
import Vtuber from '../components/cardtool/Vtuber'
import Url from '../components/cardtool/Url'

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
  },
  vtuber: {
    name: 'vtuber',
    func: Vtuber
  },
  url: {
    name: 'url',
    url: '',
    func: Url
  }
}

export default Cards
