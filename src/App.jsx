import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
