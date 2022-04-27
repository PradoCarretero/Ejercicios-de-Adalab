import "../styles/App.scss";
import { useEffect, useState } from "react";
import originalData from "../data/tasks.json";
import ls from "../services/localStorage";

function App() {
  let doneTasks = [];
  const [searchTask, setSearchTask] = useState("");
  const [tasks, setTasks] = useState(ls.get("tasks", {}.task) || originalData);
  const [newTask, setNewTask] = useState("");
  const handleTask = (ev) => {
    const idtarget = ev.currentTarget.id;
    tasks[idtarget].completed = !tasks[idtarget].completed;
    setTasks([...tasks]);
  };

  const handleInputNewTask = (ev) => {
    setNewTask(ev.target.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const newTaskObject = {
      task: newTask,
      completed: false,
    };
    const newListData = [...tasks, newTaskObject];
    setTasks(newListData);
    setNewTask("");
  };

  const handleInput = (ev) => {
    setSearchTask(ev.target.value);
  };

  const renderTasks = () => {
    tasks.filter((item) => {
      if (item.completed) {
        doneTasks.push(item);
      }
    });
    const handleDelete = (ev) => {
      ev.preventDefault();
      const idtarget = ev.currentTarget.id;
      const deleteTask = tasks.splice(idtarget, 1);
      setTasks(deleteTask);
    };

    return tasks
      .filter((item) => {
        return item.task.toLowerCase().includes(searchTask.toLowerCase());
      })

      .map((task, index) => {
        let doneTask = "";
        if (task.completed === true) {
          doneTask = "cross";
        }
        return (
          <li className={doneTask} key={index} onClick={handleTask} id={index}>
            {task.task}{" "}
            <button id={index} onClick={handleDelete}>
              x
            </button>
          </li>
        );
      });
  };

  useEffect(() => {
    ls.set("tasks", tasks);
  }, [tasks]);

  return (
    <>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
      <input
        placeholder="buscar"
        type="text"
        onChange={handleInput}
        value={searchTask}
      />
      <input
        placeholder="nuevatarea"
        type="text"
        onChange={handleInputNewTask}
        value={newTask}
      />
      <button onClick={handleClick}>Crear nueva tarea</button>
      <ul>
        <li>Tareas Totales: {tasks.length}</li>
        <li>Tareas completadas: {doneTasks.length}</li>
        <li>Tareas pendientes: {tasks.length - doneTasks.length}</li>
      </ul>
    </>
  );
}

export default App;
