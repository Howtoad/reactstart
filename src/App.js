import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
