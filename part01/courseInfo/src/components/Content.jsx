import React from "react";

const Content = ({ content }) => {
  return (
    <>
      {content.map((item, i) => (
        <p key={i}>
          {item.title} : {item.exercises}
        </p>
      ))}
    </>
  );
};

export default Content;
