import useOkxTicker from '../../hooks/useokx'

const Crypto = () => {
  const ticker = useOkxTicker('btcusdt')

  return (
    <div className="weather">
      {ticker ? (
        <div>
          <p>最新成交價：{ticker.p}</p>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  )
}
export default Crypto