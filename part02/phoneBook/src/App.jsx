import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactServices from "./services/contacts";

import "./App.css";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterSearch, setFilterSearch] = useState("");

  //CREATE NOTIFICATION FUNCTION WITH TOASTYFY
  const deletedContactNotify = () => {
    toast.success("Contact deleted successfully");
  };
  const updatedContactNotify = () => {
    toast.success("Contact updated successfully");
  };
  const removedContactNotify = () => {
    toast.warning("Contact has already been removed");
  };

  const addedContactNotify = () => {
    toast.success("Contact added successfully");
  };

  //GET CONTACTS
  const getPersons = () => {
    contactServices.getContacts().then((initialContacts) => {
      setPersons(initialContacts);
    });
  };

  // ADD CONTACT
  const addContact = (event) => {
    event.preventDefault();
    const newContact = {
      name: newName,
      phone: newPhone,
    };

    const checkContact = persons.find(
      (e) => e.name.toLowerCase() === newName.toLowerCase()
    );

    if (checkContact && checkContact.phone === newPhone) {
      alert(`Contact ${newContact.name} already exists`);
    }

    if (checkContact && checkContact.phone !== newPhone) {
      const changeNewPhone = window.confirm(
        `Are you sure you want update ${checkContact.name}'s number with a new one?`
      );
      if (changeNewPhone) {
        const userUpdate = { ...checkContact, phone: newPhone };
        contactServices
          .updateContact(checkContact.id, userUpdate)
          .then((returnedContact) => {
            setPersons(
              persons.map((person) =>
                persons.id !== checkContact.id ? person : returnedContact
              )
            );
            updatedContactNotify();
          })
          .catch(() =>
            setPersons(
              persons.filter((person) => person.name !== checkContact.name)
            )
          );
        removedContactNotify();
      }
    }
    if (!checkContact) {
      contactServices.createContact(newContact).then((response) => {
        setPersons(persons.concat(response));
        console.log("contact added", response);
      });
    }
    addedContactNotify();
    setNewName("");
    setNewPhone("");
  };

  // DELETE CONTACT
  const deleteUser = (id) => {
    contactServices.deleteContact(id).then((returnedContact) => {
      persons.map((person) => (person.id !== id ? person : returnedContact));
    });
    setPersons(persons.filter((person) => person.id !== id));
    deletedContactNotify();
  };

  useEffect(() => {
    getPersons();
  }, []);

  const filterContact = !filterSearch
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filterSearch.toLowerCase())
      );

  // HANDLERS

  const handleSearchContact = (event) => {
    setFilterSearch(event.target.value);
  };

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <PersonsList filterContact={filterContact} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
