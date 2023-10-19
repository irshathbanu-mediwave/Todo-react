function Progess({ dragUpdate }) {
  const sortitem = (id) => {
    dragUpdate(dragItem.current, dragOveritem.current, id);
  };
  return (
    <>
      <div className="progess-cardss">
        <h3>Progess </h3>
        <p>Buy Grocery</p>
      </div>
    </>
  );
}
export default Progess;
