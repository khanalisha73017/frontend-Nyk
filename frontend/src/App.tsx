import "./App.css";

import { Home } from "./component/Home";
import { AllRoutes } from "./route/AllRoutes";

function App() {
  return (
    <div className="App bg-background text-text">
      <AllRoutes />
    </div>
  );
}

export default App;
