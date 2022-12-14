//const http = require("http");
const express = require('express')
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0
  return maxId + 1
}

const port = 3001

//ADD NEW NOTES

app.post('/api/notes', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({
      error: 'content missing',
    })
  }
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }
  notes = notes.concat(note)
  res.json(note)
})

//CREATE ROUTE FOR ONE NOTE ONLY
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find((note) => note.id === id)
  note ? res.json(note) : res.status(404).end()
})

//CREATE ROUTE FOR DELETE ONE NOTE
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter((note) => note.id !== id)

  res.status(204).end()
})

app.get('/', (request, response) => {
  response.send('<h1>Hello World from nodemon!!!!!</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.listen(port, () => {
  console.log(`server runing on port ${port}`)
})

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(notes));
});

server.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
 */
