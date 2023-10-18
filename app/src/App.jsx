import Addtodolist from "./components/Todo";
import { useEffect, useReducer } from "react";
import Done from "./components/Done";
import Progess from "./components/Progess";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  function todoReducer(todos, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...todos,
          {
            id: new Date().getTime(),
            text: action.value,
            isDone: false,
            isEdit: false,
          },
        ];
      }
      case "TODO_DELETE": {
        const filtredarray = todos.filter((t) => t.id !== action.value);
        return [...filtredarray];
      }

      default: {
        throw Error("Unknown action" + action.type);
      }
    }
  }
  function handleAdd(value) {
    dispatch({
      type: "TODO_ADD",
      value: value,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "TODO_DELETE",
      value: value,
    });
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <Addtodolist />
          </div>
          <div>
            <Done />
          </div>
          <div>
            <Progess />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
