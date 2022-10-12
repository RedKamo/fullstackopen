import React from "react";

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((item, i) => (
        <p key={i}>
          {item.title} : {item.exercises}
        </p>
      ))}
    </>
  );
};

export default Content;
