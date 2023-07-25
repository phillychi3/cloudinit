import Search from "./things/search.js";
import './App.css';
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

function App() {
  // const layouts = [];
  const layouts = [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 0, w: 4, h: 1 },
  ];
  return (
    <div className="App">
      <img id='mianbg' src="https://cdn.discordapp.com/attachments/1005190123073318923/1099345993587232913/CTEC_Sort.png" className="App-logo" alt="logo" />
      <div class="dontclickimage" id="dontclickimage"></div>
      <ReactGridLayout
        className="layout"
        layout={layouts}
        breakpoints={1200}
        cols={12} 
      >
        <div key="a"><Search/></div>
        <div key="b"><Search/></div>
        <div key="c"><Search/></div>
      </ReactGridLayout>
      
    </div>
  );
}

export default App;
