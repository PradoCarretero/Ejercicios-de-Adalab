import "../styles/App.scss";
import image from "../images/image.png";

//función principal, podría tener más.

function App() {
  // variables generales, constantes, variables de estado,..
  let mostrar = true;
  // Hooks
  //Funciones generales o manejadoras
  //por último el return

  const parteHTML = <p>Hola Adalabers</p>;
  const ponerHTML = () => {
    return <p>Hola Adalabers</p>;
  };
  const mostrarText = (text) => {
    if (mostrar) {
      mostrar = false;
      console.log(mostrar);
      return <p>{text}</p>;
    } else {
      return null;
    }
  };
  return (
    <>
      <img src={image} className="" alt="" />
      {parteHTML}
      {ponerHTML()}
      {mostrarText("Analía")}
      {mostrarText("Lorena")}
    </>
  );
}

//con lo que sabemos solo puedo exportar una función (la principal)
export default App;
