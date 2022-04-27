// Fichero src/components/App.js
import { useEffect, useState } from "react";
import callToApi from "../services/api";

const App = () => {
  const [react, setReact] = useState({});

  useEffect(() => {
    callToApi().then((response) => {
      setReact(response);
    });
  });
  return <></>;
};

export default App;
