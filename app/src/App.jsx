import Addtodolist from "./components/Todo";
import { useEffect, useReducer, useState } from "react";
import Done from "./components/Done";
import Progess from "./components/Progess";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  function todoReducer(tasks, action) {
    switch (action.type) {
      case "TASK_ADD": {
        return [
          ...tasks,
          {
            id: uuidv4,
            text: "",
            dateTime: new Date(),
            instate: "todo",
          },
        ];
      }
      case "TASK_DELETE": {
        const filtredarray = tasks.filter((t) => t.id != action.value);
        return [...filtredarray];
      }
      case "TASK_EDIT": {
        const Edittask = [...tasks];
        const elementedit = Edittask.findIndex((t) => t.id === action.value.id);
        if (elementedit !== -1) {
          Edittask[elementedit].text = action.value.newvalue;
          Edittask[elementedit].dateTime = new Date();
        }
        return Edittask;
      }

      default: {
        throw Error("Unknown action" + action.type);
      }
    }
  }
  // useEffect(() => {
  //   localStorage.setItem("Todo-item", JSON.stringify(tasks));
  // }, [tasks]);

  function handleAdd() {
    dispatch({
      type: "TASK_ADD",
      // value: value,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "TASK_DELETE",

      value: id,
    });
    console.log(id);
  }
  function handleedit() {
    dispatch({
      type: "TASK_EDIT",
      value: { newvalue, id },
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
              handleedit={handleedit}
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
//  Getstorage; Getstorage;
