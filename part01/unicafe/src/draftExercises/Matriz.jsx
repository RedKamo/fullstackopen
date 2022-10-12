import { useState } from "react";

const Matriz = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClick, setAllClick] = useState([]);

  const handleLeft = () => {
    setAllClick(allClick.concat("L"));
    setLeft(left + 1);
  };

  const handleRight = () => {
    setAllClick(allClick.concat("R"));
    setRight(right + 1);
  };

  return (
    <>
      <h1>Matriz steps</h1>
      <button onClick={handleLeft}>left</button>
      <button onClick={handleRight}>Right</button>
      <div>
        {allClick.length === 0 ? (
          <h2>Start your instructions</h2>
        ) : (
          allClick.join(" ")
        )}
      </div>
    </>
  );
};

export default Matriz;
