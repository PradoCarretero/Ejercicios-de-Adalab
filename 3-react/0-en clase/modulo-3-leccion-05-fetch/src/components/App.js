import "../styles/App.scss";
import { useEffect, useState } from "react";
import getMovies from "../services/fetchMovies";
import localStorage from "..services/localStorage";

function App() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState(localStorage []);

  //use effect cuando no depende de una acción del usuario.
  useEffect(() => {
    if (movies.length === 0) {
      getMovies().then((data) => {
        localStorage.set("movies", data);
        setMovies(data);
      });
    }
  }, []);

  const handleName = (ev) => {
    localStorage.set("search", ev.currentTarget.value);
    setName(ev.currentTarget.value);
  };
const handleReset = (ev) => {
ev.preventDefault();
localStorage.remove("search");
localStorage.remove("movies");
}
  const htmlMovies = movies.map((movieItem) => {
    return <li key={movieItem.id}>{movieItem.name}</li>;
  });

  return (
    <div>
      <input type="text" name="" id="" value={name} onChange={handleName} />
      <p>{htmlMovies}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
