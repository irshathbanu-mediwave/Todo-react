import { useState } from "react";
const [InputValue, setInputValue] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
};

function Addtodolist() {
  return (
    <>
      <div className="Addtodo">
        Todo
        <form onSubmit={handleSubmit}>
          <label>Enter the task</label>
          <input type="text" />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}
export default Addtodolist;
