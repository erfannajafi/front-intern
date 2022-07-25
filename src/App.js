import "./App.css";
import { useEffect, useState } from "react";
import MyForm from "./components/MyForm";

function App() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    let timer = setInterval( () => {
        setTime(new Date().toLocaleString())
    },1000)

    return () => clearInterval(timer);
  }, []);
  
  return (
    <div >
      <header className="App-header">
        <MyForm />
        <div>{time}</div>
      </header>
    </div>
  );
}

export default App;

