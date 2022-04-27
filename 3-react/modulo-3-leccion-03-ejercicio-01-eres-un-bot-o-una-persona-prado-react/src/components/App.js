// Fichero src/components/App.js
import { useState } from "react";

const App = () => {
  let message;
  const [potato, setPotato] = useState(false);
  const [egg, setEgg] = useState(false);
  const [onion, setOnion] = useState(false);
  const [walnuts, setWalnuts] = useState(false);
  const [macaroni, setMacaroni] = useState(false);
  const [beer, setBeer] = useState(false);

  const handleIngredient = (ev) => {
    let message;
    if (ev.target.id === "potato") {
      setPotato(ev.target.checked);
      console.log("check potato");
    } else if (ev.target.id === "egg") {
      setEgg(ev.target.checked);
      console.log("check egg");
    } else if (ev.target.id === "onion") {
      setOnion(ev.target.checked);
    } else if (ev.target.id === "walnuts") {
      setWalnuts(ev.target.checked);
    } else if (ev.target.id === "macaroni") {
      setMacaroni(ev.target.checked);
    } else if (ev.target.id === "beer") {
      setBeer(ev.target.checked);
    }
  };

  const readIngredients = () => {
    if (potato && onion && egg && !walnuts && !macaroni && !beer) {
      message = <p>Eres una persona cebollista</p>;
    } else {
      message = <p>Eres una persona sin paladar</p>;
    }
    return message;
  };

  return (
    <>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <label htmlFor="macaroni">
        <input
          type="checkbox"
          name="macaroni"
          id="macaroni"
          onChange={handleIngredient}
        />
        Macarrones
      </label>
      <label htmlFor="potato">
        <input
          type="checkbox"
          name="potato"
          id="potato"
          onChange={handleIngredient}
        />
        Patatas
      </label>
      <label htmlFor="walnuts">
        <input
          type="checkbox"
          name="walnuts"
          id="walnuts"
          onChange={handleIngredient}
        />
        Nueces
      </label>
      <label htmlFor="egg">
        <input
          type="checkbox"
          name="egg"
          id="egg"
          onChange={handleIngredient}
        />
        Huevos
      </label>
      <label htmlFor="onion">
        <input
          type="checkbox"
          name="onion"
          id="onion"
          onChange={handleIngredient}
        />
        Cebolla
      </label>
      <label htmlFor="beer">
        <input
          type="checkbox"
          name="beer"
          id="beer"
          onChange={handleIngredient}
        />
        Cerveza
      </label>
      <p>{readIngredients()}</p>
    </>
  );
};

export default App;
