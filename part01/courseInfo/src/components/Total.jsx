import React from "react";

const Total = ({ course }) => {
  let totalExercises = course.parts.reduce((p, c) => p + c.exercises, 0);

  return (
    <>
      <p>Number of exercises : {totalExercises}</p>
    </>
  );
};

export default Total;
