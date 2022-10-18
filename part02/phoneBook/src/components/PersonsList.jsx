import Person from "./Person";

const PersonsList = ({ filterContact, deleteUser }) => {
  return (
    <main className="contact">
      <h2 className="contact__title">My contact list 📖</h2>
      <div className="contact__list">
        {filterContact.map((contact, i) => (
          <Person key={i} {...contact} deleteUser={deleteUser} />
        ))}
      </div>
    </main>
  );
};

export default PersonsList;
