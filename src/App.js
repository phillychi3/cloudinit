import Search from "./things/search.js";
import "./App.css";
import RGL, { WidthProvider } from "react-grid-layout";
import { React } from "react";
import Setting from "./pages/setting.js"
const ReactGridLayout = WidthProvider(RGL);

function App() {
  const things = [Search];

  const generateLayout = () => {
    const lays = things.map((key, index) => ({
      i: key.name, // 使用 key.name 設定 i 的值
      x: index * 2,
      y: 0,
      w: 2,
      h: 2,
    }));
    lays.forEach((lay) => {
      const local = localStorage.getItem(lay.i);
      console.log(local);
      if (local) {
        lay.x = parseInt(local.split(",")[0]);
        lay.y = parseInt(local.split(",")[1]);
      } else {
        localStorage.setItem(lay.i, [lay.x, lay.y]);
      }
    });
    return lays
  };

  const layouts = generateLayout();

  const generateComponentsMap = () => {
    return things.reduce((acc, thing) => {
      acc[thing.name] = thing; // 直接將組件加入 componentsMap
      return acc;
    }, {});
  };

  const componentsMap = generateComponentsMap();
  console.log(componentsMap);
  const generateElements = () => {
    return things.map((key) => {
      const Component = componentsMap[key.name]; // 使用 key.name 取得對應組件
      return <div key={key.name}>{<Component />}</div>; // 使用 JSX 語法渲染動態組件
    });
  };

  const elements = generateElements();

  const onLayoutChange = (layout) => {
    layout.forEach((lay) => {
      localStorage.setItem(lay.i, [lay.x, lay.y]);
    });
  }

  return (
    <div className="App">
      <img
        id="mianbg"
        src="https://cdn.discordapp.com/attachments/1005190123073318923/1099345993587232913/CTEC_Sort.png"
        className="App-logo"
        alt="logo"
      />
      <div class="dontclickimage" id="dontclickimage"></div>
      <Setting />
      <ReactGridLayout
        className="layout"
        layout={layouts}
        breakpoints={1200}
        cols={12}
        verticalCompact={false}
        onLayoutChange={onLayoutChange}
      >
        {elements}
      </ReactGridLayout>
      
    </div>
  );
}

export default App;
