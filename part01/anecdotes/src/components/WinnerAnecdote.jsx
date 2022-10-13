import React from "react";

const WinnerAnecdote = ({ likes, anecdotes }) => {
  const testing = Math.max(...likes);
  console.log(testing);
  return (
    <main className="winner">
      {testing === 0 ? (
        <p>No favorite anecdote yet</p>
      ) : (
        anecdotes[likes.indexOf(Math.max(...likes))]
      )}
    </main>
  );
};

export default WinnerAnecdote;
