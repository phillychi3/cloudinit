import './App.sass'
import Search from './components/Search'
// import Time from './components/cardtool/Time'
// import Weather from './components/cardtool/Weather'
// import Crypto from './components/cardtool/Crypto'
import Setting from './components/Setting'
import Cards from './util/cards.js'

function App() {
  if (localStorage.getItem('setting') === null) {
    localStorage.setItem(
      'setting',
      JSON.stringify({
        cards: [],
        background:
          'https://wallpapers.com/images/hd/minimalist-purple-sky-and-mountain-ex4suuw5xd4funov.jpg'
      })
    )
  }
  return (
    <>
      <img
        id="bg"
        src="https://wallpapers.com/images/hd/minimalist-purple-sky-and-mountain-ex4suuw5xd4funov.jpg"
        alt="background"
      />
      <div className="mask"></div>
      <Setting />
      <div className="App">
        <Search />
        <div className="cards">
          {JSON.parse(localStorage.getItem('setting')).cards.map((card,index) => {
            const Card = Cards[card.name]
            return <Card.func key={index} index={index}/>
          })}
        </div>
      </div>
    </>
  )
}

export default App
