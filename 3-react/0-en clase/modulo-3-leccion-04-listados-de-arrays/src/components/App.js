import "../styles/App.scss";
import originalData from "../data/tasks.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(originalData);
  const [search, setSearch] = useState("");
  const [taskNew, setTaskNew] = useState("");

  const handleSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  const handleTaskNew = (ev) => {
    setTaskNew(ev.currentTarget.value);
  };

  const handleAddTask = (ev) => {
    ev.preventDefault();
    const newTaskObject = {
      task: taskNew,
      completed: false,
    };
    // data.push(newTaskObject);
    const newListData = [...data, newTaskObject];
    setData(newListData);
    setTaskNew("");
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const filteredData = data.filter((dataItem) =>
    dataItem.task.toLowerCase().includes(search.toLowerCase())
  );

  const html = filteredData.map((dataItem, index) => {
    return (
      <li className={dataItem.completed ? "completed" : null} key={index}>
        {dataItem.task}
      </li>
    );
  });

  return (
    <>
      <form action="" onSubmit={handleForm}>
        Filtrar por:
        <input
          type="text"
          name=""
          id=""
          value={search}
          onChange={handleSearch}
        />
      </form>
      <ul>{html}</ul>
      <form action="" onSubmit={handleForm}>
        Añadir Tarea:
        <input
          type="text"
          name=""
          id=""
          value={taskNew}
          onChange={handleTaskNew}
        />
        <button onClick={handleAddTask}>BOTÓN</button>
      </form>
    </>
  );
}

export default App;
