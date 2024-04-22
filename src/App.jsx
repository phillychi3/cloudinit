import './App.sass'
import Search from './components/Search'
import Setting from './components/Setting'
import Cards from './util/cards.js'
import React from 'react'

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
const store = {
  getSnapshot: () => localStorage.getItem('setting'),
  subscribe: (listener) => {
    window.addEventListener('storage', listener)
    return () => window.removeEventListener('storage', listener)
  }
}

function App() {
  const storecard = React.useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  )
  console.log(storecard)

  return (
    <>
      <img
        id="bg"
        src={JSON.parse(storecard).background}
        alt="background"
      />
      <div className="mask"></div>
      <Setting />
      <div className="App">
        <Search />
        <div className="cards">
          {JSON.parse(storecard).cards.map((card, index) => {
            const Card = Cards[card.name]
            return <Card.func key={index} index={index} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
