import { useState } from "react";
import "./App.css";
import Scroll from "./components/Scroll";

function App() {
  const [ScrollAppAnna, setScrollAppAnna] = useState(0);

  function setFunctionChanger(val) {
    setScrollAppAnna(val);
  }

  return (
    <>
      <div className="Scroller">
        <span>
          <input
            type="range"
            value={ScrollAppAnna}
            min="0"
            max="100"
            className="StaticRange"
            readOnly
          />
          <span className="huli">Scrolled : {Math.round(ScrollAppAnna)}%</span>
        </span>

        <h1>Scroll Indicator</h1>

        <Scroll OnScrollChange={setFunctionChanger} />
      </div>
    </>
  );
}

export default App;
