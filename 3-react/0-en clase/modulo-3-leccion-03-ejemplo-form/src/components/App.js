import "../styles/App.scss";
import { useState } from "react";
import { getAllByAltText } from "@testing-library/react";

function App() {
  /*   const [age, setAge] = useState("all"); */

  const [data, setData] = useState({
    title: "",
    synopsis: "",
    language: "",
    age: "7",
  });

  const handleInput = (ev) => {
    ev.preventDefault();
    const newValue = ev.currentTarget.value;
    const prop = ev.currentTarget.name;
    console.log(prop);
    setData({
      ...data,
      [prop]: newValue,
    });
  };
  /*   setData({
      title: newValue,
      synopsis: data.synopsis,
      language: data.language,
      age: data.age,
    }); */

  /*   const handleChangeRadio = (ev) => {
    setAge(ev.currentTarget.value);
  }; */

  const handleReset = (ev) => {
    ev.preventDefault();
    setData = { title: "", synopsis: "", language: "", age: "" };
  };

  return (
    <div className="App page">
      <header className="header">
        <h1>Añadir películas</h1>
      </header>
      <main>
        <form action="" className="form">
          <div className="col2 mb-1">
            <label className="form__label" htmlFor="title">
              Título:
            </label>
            <input
              type="text"
              placeholder="Ej: Die hard"
              className="form__input-text"
              name="title"
              id="title"
              value={data.title}
              onChange={handleInput}
            />
          </div>
          <div className="col2 mb-1">
            <label htmlFor="synopsis">Sinopsis:</label>
            <textarea
              placeholder="Érase una vez..."
              name="synopsis"
              id="synopsis"
              value={data.synopsis}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="col2 mb-1">
            <label htmlFor="language">Idioma:</label>
            <select name="language" id="language">
              <option disabled value="">
                Escoge una opción
              </option>
              <option value="es">Español</option>
              <option value="cat">Catalán</option>
              <option value="gal">Gallego</option>
              <option value="eus">Euskera</option>
            </select>
          </div>
          <div className="col2">
            <p>Clasificación por edad</p>
            <div>
              <label htmlFor="age-all">
                <input
                  type="radio"
                  name="age"
                  id="age-all"
                  value="all"
                  onChange={handleInput}
                  checked={data.age === "all"}
                />
                Todas las edades
              </label>
              <label htmlFor="age-7">
                <input
                  type="radio"
                  name="age"
                  id="age-7"
                  value="7"
                  onChange={handleInput}
                  checked={data.age === "7"}
                />
                +7 años
              </label>
            </div>
          </div>
          <button>Enviar</button>
          <button onChange={handleReset}>Borrar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
