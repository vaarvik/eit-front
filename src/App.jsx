import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import useCitiesStore from "./store/store";

function App() {
  const isLoggedIn = useCitiesStore((state) => state.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn ? <Header /> : null }
      <div className="App__content">
        {isLoggedIn ? <Outlet /> : <LoginPage />}
      </div>
    </div>
  );
}

export default App;
