import './App.sass'
import Search from './components/Search'
import Card from './components/Card'

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
            element={
              <div>
                <h1>Hi</h1>
                <p>My name is</p>
                <h2>Yash</h2>
                <p>I am a</p>
                <h3>Web Developer</h3>
              </div>
            }
          />
          <Card
            element={
              <div>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
                <h1>Hi</h1>
              </div>
            }
          />
        </div>
      </div>
    </>
  )
}

export default App
