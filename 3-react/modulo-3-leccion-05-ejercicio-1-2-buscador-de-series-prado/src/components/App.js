import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";

function App() {
  const [searchName, setSearchName] = useState("");
  const [serie, setSerie] = useState([]);
  const handleInput = (ev) => {
    setSearchName(ev.target.value);
  };
  useEffect(() => {
    callToApi(searchName).then((response) => setSerie(response));
  }, [searchName]);

  const renderCharacters = () => {
    return serie.map((any, index) => {
      console.log(serie);
      return (
        <li key={index}>
          <p>Nombre: {any.name}</p>
          <p>Duración: {any.runtime} minutos</p>
        </li>
      );
    });
  };

  return (
    <>
      <input
        onChange={handleInput}
        value={searchName}
        type="text"
        name=""
        id=""
      />
      <ul>{renderCharacters()}</ul>
    </>
  );
}

export default App;
