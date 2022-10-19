//const http = require("http");
const express = require("express");
const app = express();

app.use(express.json());

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

/* const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return maxId + 1;
}; */

const port = 3001;

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

//CREATE ROUTE FOR DELETE ONE NOTE
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.get("/info", (request, response) => {
  const requestTime = new Date(Date.now());
  response.send(
    `<h4>PhoneBook has info for ${persons.length} people </h4> <p>${requestTime}</p>`
  );
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.listen(port, () => {
  console.log(`server runing on port ${port} `);
});

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(notes));
});

server.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
 */
