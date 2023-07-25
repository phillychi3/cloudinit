import logo from './logo.svg';
import GridLayout from "react-grid-layout";
import Search from "./things/search.js";
import './App.css';

function App() {
  const layouts = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <div className="App">
      <img id='mianbg' src="https://cdn.discordapp.com/attachments/1005190123073318923/1099345993587232913/CTEC_Sort.png" className="App-logo" alt="logo" />
      <div class="dontclickimage" id="dontclickimage"></div>
      <GridLayout
        className="layout"
        layout={layouts}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">
          <Search/>
        </div>
      </GridLayout>
    </div>
  );
}

export default App;
