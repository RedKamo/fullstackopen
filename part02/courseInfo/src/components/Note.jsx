const Note = ({ content, important }) => {
  return (
    <main className="note">
      <li className={important ? "note__important" : ""}>{content}</li>
    </main>
  );
};

export default Note;
