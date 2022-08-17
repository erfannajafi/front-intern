import "./App.css";
import { useEffect, useState } from "react";
import MyForm from "./components/MyForm";

function App() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="header">
      <header className="box">
        <MyForm />
      </header>
      <div>{time}</div>
    </div>
  );
}

export default App;
