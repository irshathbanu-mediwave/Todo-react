import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function Addtodolist({ addTask, tasks, handledelete, handleedit }) {
  const [value, setValue] = useState("");

  const addCard = () => {
    addTask(value);
  };

  function enterkeyPressed(event, newValue, id) {
    if (event.keycode == 10) {
      setValue(newValue);
      handleedit(newValue, id);
      console.log("Enter key is pressed");
      console.log(newValue);
      event.target.contentEditable = false;
      return true;
    } else {
      return false;
    }
  }
  function handleedit(e) {
    e.target.contentEditable = true;
  }
  return (
    <>
     

      <button onClick={addCard} className="btn btn-light">
        +
      </button>

      <div className="show-card">
        {tasks.map((task, index) => (
          <div key={task.id} className="card" draggable>
            <div className="title">
              Task:
              <button onClick={() => handledelete(task.id)}>Delete</button>
            </div>
            <div
              className=" textarea"
              key={task.id}
              contentEditable={true}
              onKeyDown={(e) => enterkeyPressed(e, e.target.innerHTML, task.id)}
              onClick={(e) => handleedit(e)}
              html={task.text}
              required
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Addtodolist;
