import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";



function Addtodolist() {
  const [value, setValue] = useState("");
  const addCard = () => {
    
  };
  return (
    <>
      <div className="Add-task">
        <div className="Addtodo">
          <h1>To-do</h1>
        </div>
        <div className="btn">
          <button onClick={addCard} className="btn btn-light">
            +
          </button>
        </div>
        <div className="add-card">
          <div key={index}>{value}</div>
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