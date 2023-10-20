function Done({ tasks, handledelete }) {
  const ondragstart = (event, id) => {
    console.log("id-done", id);
    event.dataTransfer.setData("id", id);
  };
  return (
    <>
      <div className="showCards">
        {tasks
          .filter((t) => t.inState === "done")
          .map((task, index) => (
            <div
              key={task.id}
              className="card"
              draggable
              onDragStart={(e) => {
                ondragstart(e, task.id);
              }}
            >
              <div className="title-bar">
                Task:
                <button
                  className="btn btn-danger Deletebtn"
                  onClick={() => {
                    handledelete(task.id);
                  }}
                >
                  x
                </button>
              </div>

              <div className="textarea" key={task.id}>
                {task.text}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Done;
