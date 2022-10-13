import React from "react";

const RandomButton = ({ randomAnecdote }) => {
  return (
    <button className="randomButton" onClick={randomAnecdote}>
      Next anecdote 🤣
    </button>
  );
};

export default RandomButton;
