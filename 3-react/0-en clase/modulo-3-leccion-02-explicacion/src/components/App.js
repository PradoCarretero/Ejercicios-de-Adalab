import "../styles/App.scss";
import { useState } from "react";
import image from "../images/image.png";

//función principal, podría tener más.

function App() {
  /*   let count = 0; */
  const [count, setCount] = useState(0);
  const [classDark, setClassDark] = useState("dark");
  const handleClickBtn = (ev) => {
    ev.preventDefault();
    setCount(count + 1);
    //ternario
    classDark === "dark" ? setClassDark("red") : setClassDark("dark");
    /* count = count + 1;
    console.log(count); */
  };
  return (
    <div className={`App ${classDark}`}>
      <form action="">
        <h1>Contador</h1>
        <input type="text" value={count} />
        <button onClick={handleClickBtn}>Incrementar</button>
      </form>
      <img src={image} className="" alt="" />
    </div>
  );
}

//con lo que sabemos solo puedo exportar una función (la principal)
export default App;
