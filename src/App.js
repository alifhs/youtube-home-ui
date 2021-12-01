import logo from "./logo.svg";

import Header from "./components/Header";
import "./App.css";
import Chip from "./components/Chip";
import LeftBar from "./components/LeftBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className="bars">
        <Header />
        <Chip />
        <LeftBar />
      </div>
      <Content />
    </div>
  );
}

export default App;
