import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="window">
      <h2 className="header-text animate">API Gateway</h2>
      <h2 className="header-text animate">Coming soon</h2>
    </div>
  );
}

export default App;
