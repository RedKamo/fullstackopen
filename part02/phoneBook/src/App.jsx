import { useState } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    const newContact = {
      name: newName,
      phone: newPhone,
    };
    setPersons(persons.concat(newContact));
    setNewName("");
    setNewPhone("");
    const checkContact = persons.find(
      (e) => e.name.toLowerCase() === newName.toLowerCase()
    );

    if (checkContact) {
      alert(`Contact ${newName} already exists`);
      setPersons([...persons]);

      return;
    }
  };
  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <div className="App">
      <h2>Phone Book ☎️</h2>
      <form onSubmit={addContact}>
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

      <section>
        {persons.map((contact) => (
          <section key={contact.name}>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
          </section>
        ))}
      </section>
    </div>
  );
}

export default App;
