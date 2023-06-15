import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img id='mianbg' src="https://cdn.discordapp.com/attachments/1005190123073318923/1099345993587232913/CTEC_Sort.png" className="App-logo" alt="logo" />
      <div class="dontclickimage" id="dontclickimage"></div>
      <div class="search-thing" id="search-thing">
        <input type="text" placeholder="Search for a game" />
        <div class="search-button" id="search-button">

        </div>
        <div id="change-search-button">

        </div>

      </div>
    </div>
  );
}

export default App;
