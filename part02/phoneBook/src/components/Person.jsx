const Person = ({ name, phone }) => {
  return (
    <section className="contact__person">
      <p className="contact__person--name">{name}</p>
      <p className="contact__person--phone">{phone}</p>
    </section>
  );
};

export default Person;
