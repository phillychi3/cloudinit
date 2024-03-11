import './App.sass'
import Search from './components/Search'
import Card from './components/Card'
import time from './components/cardtool/Time'
import weather from './components/cardtool/Weather'
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
          <Card
            element={time()}
          />
          <Card
            element={weather()}
          />
          <Crypto
            coin="btcusdt"
          />
        </div>
      </div>
    </>
  )
}

export default App
