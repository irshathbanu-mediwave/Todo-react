import Addtodolist from "./components/Todo";
import { useEffect, useReducer, useState } from "react";
import Done from "./components/Done";
import Progess from "./components/Progess";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  // const initial = getStorage();
  // console.log(initial);
  const [tasks, dispatch] = useReducer(todoReducer, []);
  useEffect(() => {
    saveLocal(tasks);
  }, [tasks]);
  function getStorage() {
    const getvalue = localStorage.getItem("Tasks-list");
    console.log(getvalue);
    if (getvalue) {
      return JSON.parse(getvalue);
    }
    return [];
  }
  function saveLocal(tasks) {
    localStorage.setItem("Tasks-list", JSON.stringify(tasks));
  }
  function todoReducer(tasks, action) {
    switch (action.type) {
      case "TASK_ADD": {
        return [
          ...tasks,
          {
            id: uuidv4(),
            text: "",
            dateTime: new Date(),
            instate: "todo",
          },
        ];
      }
      case "TASK_DELETE": {
        const filtredarray = tasks.filter((t) => t.id !== action.value);
        return filtredarray;
      }
      case "TASK_EDIT": {
        const Edittask = [...tasks];
        const elementedit = Edittask.findIndex((t) => t.id === action.value.id);
        if (elementedit !== -1) {
          Edittask[elementedit].text = action.value.value;
          Edittask[elementedit].dateTime = new Date();
        }
        return Edittask;
      }
      case "TASK_DRAG": {
        let newtodo = [...tasks];
        newtodo[action.value.dragItemcurrent].instate = "progess";
        return newtodo;
      }

      default: {
        throw Error("Unknown action" + action.type);
      }
    }
  }
  function handleAdd(value) {
    dispatch({
      type: "TASK_ADD",
      value: value,
    });
  }
  function handledelete(id) {
    console.log(id);
    dispatch({
      type: "TASK_DELETE",
      value: id,
    });
  }
  function handleedit(value, id) {
    dispatch({
      type: "TASK_EDIT",
      value: { value, id },
    });
  }
  function dragUpdate(dragItemcurrent, dragoverItemcurrent, id) {
    dispatch({
      type: "TASK_DRAG",
      value: { dragItemcurrent, dragoverItemcurrent, id },
    });
  }
  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);
  return (
    <>
      <h1 className="title-drello">Drello App </h1>
      <div className="container">
        <div className="row">
          <div className="col  Todo-Card">
            <Addtodolist
              addTask={(text) => {
                handleAdd(text);
              }}
              handledelete={handledelete}
              tasks={tasks}
              handleedit={handleedit}
              dragUpadte={dragUpdate}
            />
          </div>
          <div className="col Progess-card">
            <Progess dragUpdate={dragUpdate} />
          </div>
          <div className="col Done-card">
            <Done dragUpdate={dragUpdate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
//  Getstorage; Getstorage;
// useEffect(() => {
//   const savedTasks = localStorage.getItem("tasks");
//   if (savedTasks) {
//     dispatch({ type: "TASK-SAVE", value: JSON.parse(savedTasks) });
//   }
//   console.log(savedTasks);
// }, []);
// useEffect(() => {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }, [tasks]);
// useEffect(() => {
//   // Get tasks from local storage when the component mounts
//   const savedTasks = localStorage.getItem("tasks");
//   if (savedTasks) {
//     dispatch({ type: "TASK_LOAD", value: JSON.parse(savedTasks) });
//   }
// }, []);
//
// function getstorage() {
//   return JSON.stringify(localStorage.getItem("Task-list") || []);
// }
// useEffect(() => {
//   localStorage.setItem("Task-list", JSON.stringify(tasks));
// }, [tasks]);
