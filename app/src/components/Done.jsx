function Done({ dragUpdate }) {
  const sortitem = (id) => {
    dragUpdate(dragItem.current, dragOveritem.current, id);
  };
  return (
    <>
      <div className="done-cardsss">
        <h2>Done</h2>
        <p>Finish Assignment</p>
      </div>
    </>
  );
}
export default Done;
