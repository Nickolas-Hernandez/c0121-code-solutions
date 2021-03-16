const express = require('express');
const app = express();
const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for(const id in grades){
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
   const newEntry = {}
   const body = req.body;
   for(const key in body){
     newEntry[key] = body[key];
   }
   newEntry.id = nextId;
   grades[nextId] = newEntry
   nextId++;
   res.status(204).send();
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
