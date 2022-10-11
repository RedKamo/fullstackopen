import React from "react";

const Total = ({ content }) => {
  let totalExercises = content.reduce((p, c) => p + c.exercises, 0);

  return (
    <>
      <p>Number of exercises : {totalExercises}</p>
    </>
  );
};

export default Total;
