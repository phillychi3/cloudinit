import './App.sass'
import Search from './components/Search'
import Time from './components/cardtool/Time'
import Weather from './components/cardtool/Weather'
import Crypto from './components/cardtool/Crypto'

function App() {
  return (
    <>
      <img
        id="bg"
        src="https://wallpapers.com/images/hd/minimalist-purple-sky-and-mountain-ex4suuw5xd4funov.jpg"
        alt="background"
      />
      <div className="mask"></div>
      <div className="App">
        <Search />
        <div className="cards">
          <Time />
          <Weather />
          <Crypto coin="btcusdt" />
        </div>
      </div>
    </>
  )
}

export default App
