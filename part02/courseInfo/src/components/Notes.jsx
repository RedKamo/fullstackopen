import Note from "./Note";

const Notes = ({
  addNote,
  newNote,
  handleChange,
  notesToShow,
  setShowAll,
  showAll,
  toggleImportanceOf,
}) => {
  return (
    <main className="notes">
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange} type="text" />
        <button type="submit">Add ➕</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      {notesToShow.length === 0 ? (
        <h3>...No notes yet</h3>
      ) : (
        notesToShow.map((note, i) => (
          <Note
            key={i}
            {...note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))
      )}
    </main>
  );
};

export default Notes;
