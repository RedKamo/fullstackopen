//const http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = morgan("combined");
const cors = require("cors");

let persons = [
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
];

//IMPLEMENTING MIDDLEWARE WITH MORGAN

morgan.token("body", (req) => JSON.stringify(req.body));

app.use(cors());
app.use(express.static("dist"));
app.use(morgan(":method :url :body"));
app.use(express.json());
//app.use(logger);

//const port = 3001;

//IMPLEMENTING MIDDLEWARE
/* 
const requestLogger = (req, res, next) => {
  console.log("Method", req.method);
  console.log("Path", req.path);
  console.log("Body", req.body);
  console.log("---");
  next();
};

app.use(requestLogger); */

app.get("/info", (request, response) => {
  const requestTime = new Date(Date.now());
  response.send(
    `<h4>PhoneBook has info for ${persons.length} people </h4> <p>${requestTime}</p>`
  );
});

//ADD NEW PERSON

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name || !body.phone) {
    return res.status(400).json({
      error: "name or phone is missing",
    });
  }
  const person = {
    name: body.name,
    phone: body.phone,
    id: Math.floor(Math.random() * 1000),
  };

  persons = persons.concat(person);

  res.json(person);
});

//GET ONE PERSON ONLY
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === id);
  person ? res.json(person) : res.status(404).end();
});

//CREATE ROUTE FOR DELETE ONE PERSON
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

/* const unknowEndpoint = (req, res) => {
  res.status(404).send({ error: "unknow Endpoint" });
};

app.use(unknowEndpoint); */

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server runing on port ${PORT} `);
});
