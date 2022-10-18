const Person = ({ name, phone, deleteUser, id }) => {
  return (
    <section className="contact__container">
      <section className="contact__person">
        <p className="contact__person--name">{name}</p>
        <p className="contact__person--phone">{phone}</p>
      </section>
      <button onClick={() => deleteUser(id)}>🗑️</button>
    </section>
  );
};

export default Person;

/* //data
{
  "name": "Arto Hellas",
  "phone": "040-123456",
  "id": 1
},
{
  "name": "Ada Lovelace",
  "phone": "39-44-5323523",
  "id": 2
},
{
  "name": "Dan Abramov",
  "phone": "12-43-234345",
  "id": 3
},
{
  "name": "Mary Poppendieck",
  "phone": "39-23-6423122",
  "id": 4
} */
