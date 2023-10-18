import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function Addtodolist({ addTask, tasks, handledelete }) {
  const [value, setValue] = useState("");
  const addCard = () => {
    addTask(value);
    setValue("");
  };
  function handletextchange(newValue) {
    setValue(newValue);
  }
  return (
    <>
      <div className="content">
        <div class="header">
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
                  className="delete-btn"
                  onClick={() => handledelete(task.id)}
                >
                  Delete
                </button>
              </div>
              <textarea
                key={task.id}
              
                contentEditable={true}
                suppressContentEditableWarning={true}
                onInput={(e) => handletextchange(e.target.innerHtml)}
              />
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
