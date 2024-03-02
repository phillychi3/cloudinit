import './App.sass'
import Search from './components/Search'

function App() {
  return (
    <>
      <img id="bg" src="https://wallpapers.com/images/hd/minimalist-purple-sky-and-mountain-ex4suuw5xd4funov.jpg" alt="background" />
      <div className='mask'></div>
      <div className="App">
        <Search />
      </div>
    </>
  )
}

export default App
