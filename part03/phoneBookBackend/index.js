require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/Person");
const app = express();

//const PORT = process.env.PORT || 3001;
const PORT = process.env.PORT;

morgan.token("body", (req) => JSON.stringify(req.body));

app.use(express.static("dist"));
app.use(cors());

app.use(morgan(":method :url :body"));
app.use(express.json());

/* let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    phone: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    phone: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    phone: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Helle",
    phone: "39-23-1233422",
  },
  {
    id: 4,
    name: "Cam Suarez",
    phone: "555555-1233422",
  },
];
 */

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

//GET ONE PERSON ONLY
app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.get("/info", (req, res) => {
  const requestTime = new Date(Date.now());
  Person.find({}).then((persons) => {
    res.send(
      `<h4>PhoneBook has info for ${persons.length} people </h4> <p>${requestTime}</p>`
    );
  });
});

//ADD NEW PERSON
app.post("/api/persons", (req, res) => {
  const body = req.body;

  const contact = new Person({
    name: body.name,
    phone: body.phone,
  });

  contact
    .save()
    .then((savedContact) => savedContact.toJSON())
    .then((saveAndFormattedContact) => {
      res.json(saveAndFormattedContact);
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
  const body = request.body;

  const contact = {
    name: body.name,
    phone: body.phone,
  };

  Person.findByIdAndUpdate(req.params.id, contact, { new: true })
    .then((updatedPerson) => {
      res.json(updatedPerson);
    })
    .catch((error) => next(error));
});

//CREATE ROUTE FOR DELETE ONE PERSON
app.delete("/api/persons/:id", (req, res, next) => {
  Person.findOneAndDelete({ id: req.params.id })
    .then((res) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

const unknowEndpoint = (req, res) => {
  res.status(404).send({ error: "unknow Port" });
};

app.use(unknowEndpoint);

const errorHandler = (error, req, res, next) => {
  console.log(error.message);

  if (error.name === "CastError") {
    return res.status(404).sedn({ error: "bad id" });
  }
  next(error);
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT} `);
});

module.exports = app;
