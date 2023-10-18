import Addtodolist from "./components/Todo";
import { useEffect, useReducer, useState } from "react";
import Done from "./components/Done";
import Progess from "./components/Progess";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [data, setData] = useState("");

  function todoReducer(tasks, action) {
    switch (action.type) {
      case "TASK_ADD": {
        return [
          ...tasks,
          {
            id: new Date().getTime(),
            text: action.value,
            instate: "todo",
          },
        ];
      }
      case "TASK_DELETE": {
        const filtredarray = tasks.filter((t) => t.id !== action.value);
        return [...filtredarray];
      }

      default: {
        throw Error("Unknown action" + action.type);
      }
    }
  }
  useEffect(() => {
    localStorage.setItem("Todo-item", JSON.stringify(tasks));
  });
  function handleAdd(value) {
    dispatch({
      type: "TASK_ADD",
      value: value,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "TASK_DELETE",
      value: id,
    });
  }
  return (
    <>
      <div className="container">
        <div className="row-card">
          <div>
            <Addtodolist
              addTask={(text) => {
                handleAdd(text);
              }}
              handledelete={handleDelete}
              tasks={tasks}
            />
          </div>
          <div>
            <Progess />
          </div>
          <div>
            <Done />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
