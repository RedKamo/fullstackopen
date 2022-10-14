import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [persons, setPersons] = useState([]);

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

  const getPersons = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const allPersons = response.data;
      setPersons(allPersons);
      console.log(allPersons);
    });
  };

  useEffect(() => {
    getPersons();
  }, []);

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
