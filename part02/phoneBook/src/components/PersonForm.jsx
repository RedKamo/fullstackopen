const PersonForm = ({
  addContact,
  handleName,
  newName,
  handlePhone,
  newPhone,
}) => {
  return (
    <form onSubmit={addContact}>
      <h2>Add A contact</h2>
      <section className="form__section">
        <label htmlFor="name">Name: </label>
        <input onChange={handleName} value={newName} />
      </section>
      <section className="form__section">
        <label htmlFor="phone">Phone: </label>
        <input onChange={handlePhone} value={newPhone} />
      </section>
      <section className="form__button">
        <button type="submit">Add Contact</button>
      </section>
    </form>
  );
};

export default PersonForm;
