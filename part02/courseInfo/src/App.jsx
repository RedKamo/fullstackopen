import { useState } from "react";
//import Notes from "./components/Note";
import Course from "./components/Course";
import "./App.css";

const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  /* const notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      date: "2019-05-30T18:39:34.091Z",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true,
    },
  ]; */
  /*   const result = notes.map((note) => note.content);
  console.log(result); */

  return (
    <div className="App">
      <h1>Courses</h1>
      {course.map((course, id) => (
        <Course key={id} {...course} />
      ))}

      {/*  <ul>
        {notes.map((note, id) => (
          <Notes key={id} {...note} />
        ))}
      </ul> */}
    </div>
  );
};

export default App;
