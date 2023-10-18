import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function Addtodolist({ addTask, tasks, handledelete, handleedit }) {
  const [value, setValue] = useState("");

  const addCard = () => {
    addTask(value);
  };

  function handleedit(e) {
    e.target.contentEditable = true;
  }
  function enterkeyPressed(event, newValue, id) {
    if (event.keycode == 10) {
      setValue(newValue);
      handleedit(newValue, id);
      event.target.contentEditable = false;
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <div className="content">
        <div className="header">
          <div className="Title">
            <h1>Todo</h1>
          </div>
          <div className="add-btn">
            <button onClick={addCard} className="btn btn-light">
              +
            </button>
          </div>
        </div>

        <div className="show-card">
          {tasks.map((task, index) => (
            <div key={task.id} className="card" draggable>
              <div className="title">
                Task:
                <button
                  className="btn btn-light"
                  onClick={() => handledelete(task.id)}
                >
                  Delete
                </button>
              </div>
              <div
                className=" textarea"
                key={task.id}
                contentEditable={true}
                onKeyDown={(e) =>
                  enterkeyPressed(e, e.target.innerHTML, task.id)
                }
                onClick={(e) => handleedit(e)}
                html={task.text}
                required
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Addtodolist;
// const addvalue = () => [
//   ...value,
//   <value key={value.length} contentEditable={true}>
//     <p>Add the task</p>
//   </value>,
// ];
// setValue(addvalue);
// const [edit, Setedit] = useState(false);// function handletextchange(newValue) {
//   setValue(newValue);
// }
// function handleedit() {
//   Setedit("");
// }
