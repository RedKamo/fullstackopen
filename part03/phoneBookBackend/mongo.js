const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  )
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.wdpgraf.mongodb.net/phoneBook?retryWrites=true&w=majority`

mongoose.connect(url)

//create Person schema

const personSchema = new mongoose.Schema({
  name: String,
  phone: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log('PhoneBook')
    result.forEach((person) => {
      console.log(person.name, person.phone)
    })
    mongoose.connection.close()
  })
}

if (process.argv.length > 3) {
  const name = process.argv[3]
  const phone = process.argv[4]

  const person = new Person({
    name: name,
    phone: phone,
  })
  person.save().then((result) => {
    console.log(`added ${name} number ${phone} to phonebook`)
    mongoose.connection.close()
  })
}

/* const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "HTML is Easy",
  date: new Date(),
  important: true,
});
 */
/* note.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
}); */
/* Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
 */
