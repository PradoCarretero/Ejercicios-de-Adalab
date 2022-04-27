import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [resultado, setResultado] = useState("");

  const handleInputNumberA = (ev) => {
    const newValue = parseInt(ev.currentTarget.value);
    setNumberA(newValue);
  };

  const handleInputNumberB = (ev) => {
    const newValue = parseInt(ev.currentTarget.value);
    setNumberB(newValue);
  };

  const handleClickButton = (ev) => {
    setResultado(numberA - numberB);
  };

  const getClassName = () => {
    if (resultado >= 100) {
      return "";
    } else if (resultado >= 0) {
      return "low";
    } else {
      return "negative";
    }
  };

  const claseDelParrafo = resultado < 0 ? "negative" : "";
  return (
    <>
      <input
        onChange={handleInputNumberA}
        value={numberA}
        type="number"
        name="numberA"
        id="numberA"
      />
      <input
        onChange={handleInputNumberB}
        value={numberB}
        type="number"
        name="numberB"
        id="numberB"
      />
      <button onClick={handleClickButton}>Calcular</button>
      <p className={`resultado ${getClassName()}`}>{resultado}</p>
    </>
  );
}

export default App;
