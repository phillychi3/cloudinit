import useOkxTicker from '../../hooks/useokx'
import Svg from './Loading'
const Crypto = () => {
  const ticker = useOkxTicker('btcusdt')

  return (
    <div className="weather">
      {ticker ? (
        <div>
          <p>最新成交價：{parseInt(ticker.p).toFixed(1)}</p>
        </div>
      ) : (
        <Svg/>
      )}
    </div>
  )
}
export default Crypto