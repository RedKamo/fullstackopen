import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterSearch, setFilterSearch] = useState("");

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

  const handleSearchContact = (event) => {
    setFilterSearch(event.target.value);
  };

  const filterContact = !filterSearch
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filterSearch.toLowerCase())
      );

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handlePhone = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <div className="App">
      <h1>Phone Book ☎️</h1>
      <Filter
        handleSearchContact={handleSearchContact}
        filterSearch={filterSearch}
      />
      <PersonForm
        addContact={addContact}
        handleName={handleName}
        handlePhone={handlePhone}
        newName={newName}
        newPhone={newPhone}
      />

      <PersonsList filterContact={filterContact} />
    </div>
  );
}

export default App;
