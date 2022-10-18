const Note = ({ content, important, toggleImportance }) => {
  const label = important ? "make note important" : " make important";
  return (
    <main className="note">
      <li className={important ? "note__important" : ""}>{content}</li>
      <button onClick={toggleImportance}>{label}</button>
    </main>
  );
};

export default Note;
