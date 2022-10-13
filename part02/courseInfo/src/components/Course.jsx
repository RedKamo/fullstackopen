import React from "react";

const Course = ({ name, parts }) => {
  const totalExercises = parts.reduce((prev, curr) => prev + curr.exercises, 0);

  //  console.log("total", totalExercises);

  return (
    <main className="course">
      <h3>{name}</h3>
      {parts.map((part, id) => (
        <p key={id}>
          {part.name}
          <span> {part.exercises}</span>
        </p>
      ))}
      <section className="course__total">
        <p>total of exercises: {totalExercises} </p>
      </section>
    </main>
  );
};

export default Course;
