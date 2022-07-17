import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    let timer = setInterval( () => {
        setTime(new Date().toLocaleString())
    },1000)

    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{time}</div>
      </header>
    </div>
  );
}

export default App;