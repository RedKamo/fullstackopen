import React from "react";

const Course = ({ name, parts }) => {
  const totalExercises = parts.reduce((prev, curr) => prev + curr.exercises, 0);

  //  console.log("total", totalExercises);

  return (
    <main>
      <h2>{name}</h2>
      {parts.map((part, id) => (
        <p key={id}>
          {part.name}
          <span> {part.exercises}</span>
        </p>
      ))}
      <section>
        <p>total of exercises: {totalExercises} </p>
      </section>
    </main>
  );
};

export default Course;
