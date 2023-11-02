import { useState } from "react";
import Tooltip from "./components/Tooltip";
import "./toolTip.css";
function App() {
  const [toolTipPosition, setToolTipPosition] = useState("top");

  return (
    <div className="App">
      <div>
        <label>Tooltip Postion</label>
        <br />
        <select
          value={toolTipPosition}
          onChange={(e) => setToolTipPosition(e.target.value)}
        >
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="right">Right</option>
          <option value="left">Left</option>
        </select>
      </div>
      <Tooltip position={toolTipPosition} text="Tooltip activated">
        <button>Press</button>
      </Tooltip>
    </div>
  );
}

export default App;
