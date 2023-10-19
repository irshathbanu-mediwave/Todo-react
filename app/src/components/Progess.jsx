import { useState, useRef } from "react";

function Progess({ tasks, handledelete }) {
  const onDragStart = (event, id) => {
    console.log("dragstart", id);
    event.dataTransfer.setData("id", id);
  };
  return (
    <>
      <div className="show-card">
        {tasks.filter((t) => t.inState === "progess")}
      </div>
    </>
  );
}
export default Progess;
