import React from "react";

const Anecdotes = ({ anecdotes, selected, handlePoints, likes }) => {
  return (
    <section className="anecdotes">
      <h2 className="counter">{likes[selected]}</h2>
      <article>
        <p>{anecdotes[selected]}</p>
        <button onClick={handlePoints}>Like ❤️</button>
      </article>
    </section>
  );
};

export default Anecdotes;
