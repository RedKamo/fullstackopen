import "./App.css";
import { useState } from "react";
import Courses from "./components/Courses";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

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

  return (
    <div className="App">
      <Courses course={course} />
      <Notes
        notes={notes}
        setNotes={setNotes}
        addNote={addNote}
        newNote={newNote}
        handleChange={handleChange}
        notesToShow={notesToShow}
        showAll={showAll}
        setShowAll={setShowAll}
      />
      {/*  <ul>
        {notes.map((note, id) => (
          <Notes key={id} {...note} />
        ))}
      </ul> */}
    </div>
  );
};

export default App;
