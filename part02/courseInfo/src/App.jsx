import "./App.css";
import { useState, useEffect } from "react";
import Courses from "./components/Courses";
import Notes from "./components/Notes";
import axios from "axios";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (notes.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from the server`);
      });
    setNotes(notes.filter((n) => n.id !== id));
    //console.log(`importance of ${id} needs to be toggled`);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      //id: notes.length + 1,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
      console.log("data", returnedNote);
    });
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

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  //create axios get request
  /* 
  const fetchNotes = async () => {
    const data = axios.get("http://localhost:3001/notes");
    console.log('data',data);
  };

  useEffect(() => {
    fetchNotes();
  }, []); */
  /* 
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []); */
  //console.log("render", notes.length, "notes");

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
        toggleImportanceOf={toggleImportanceOf}
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
