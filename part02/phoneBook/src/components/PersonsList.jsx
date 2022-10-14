import Person from "./Person";

const PersonsList = ({ filterContact }) => {
  return (
    <main className="contact">
      <h2 className="contact__title">My contact list 📖</h2>
      <div className="contact__list">
        {filterContact.map((contact, index) => (
          <Person key={index} {...contact} />
        ))}
      </div>
    </main>
  );
};

export default PersonsList;
