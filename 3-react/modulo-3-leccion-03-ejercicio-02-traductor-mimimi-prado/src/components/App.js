import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [translation, setTranslation] = useState("");
  const handleText = (ev) => {
    setTranslation(ev.target.value);
  };
  const mimi = () => {
    return translation.replace(/[aeiou]/g, "i");
  };

  return (
    <div>
      <textarea cols="30" rows="10" onChange={handleText}></textarea>
      <p>{mimi()}</p>
    </div>
  );
}

export default App;
