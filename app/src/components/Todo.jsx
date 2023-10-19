import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect, useRef } from "react";

function Addtodolist({ addTask, tasks, handledelete, handleedit, dragUpadte }) {
  const [value, setValue] = useState("");
  // const [currentDate, SetcurrentTime] = useState(new Date());
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const sortitem = (id) => {
    dragUpadte(dragItem.current, dragOverItem.current, id);
  };
  const addCard = () => {
    addTask(value);
  };
  const d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let str = day + ":" + month + ":" + year;

  var hours = d.getHours(); // gives the value in 24 hours format
  var AmOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  var minutes = d.getMinutes();
  var finalTime = hours + ":" + minutes + " " + AmOrPm;
  finalTime; // final time Time - 22:10
  function enterkeyPressed(event, value, id) {
    if (event.keycode == 10) {
      setValue(value);
      handleedit(value, id);
      event.target.contentEditable = false;
      return true;
    } else {
      return false;
    }
  }
  function handleedit(e) {
    e.target.contentEditable = true;
  }
  // useEffect(() => {
  //   const Intervalid = setInterval(() => {
  //     SetcurrentTime(new Date());
  //   });
  //   return () => {
  //     clearInterval(Intervalid);
  //   };
  // }, []);
  return (
    <>
      <div className="whole">
        <div className="content">
          <div className="title-todo">
            <h1>To-do</h1>
          </div>
          <div className="delete-btn">
            <button onClick={addCard} className="btn btn-light delete-button">
              +
            </button>
          </div>
        </div>

        <div className="show-card">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className="card"
              draggable
              onDragStart={(e) => {
                dragItem.current = index;
              }}
              onDragEnter={(e) => {
                dragOverItem.current = index;
              }}
              onDragEnd={() => sortitem(task.id)}
            >
              <div className="title">
                Task:
                <button
                  className="delete-btn"
                  onClick={() => handledelete(task.id)}
                >
                  X
                </button>
              </div>
              <div
                className="textarea"
                contentEditable={true}
                onKeyDown={(e) =>
                  enterkeyPressed(e, e.target.innerHTML, task.id)
                }
                onClick={(e) => handleedit(e)}
                html={task.text}
              ></div>
              <div>
                <h6>
                  Task-time
                  {str},{finalTime}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Addtodolist;
