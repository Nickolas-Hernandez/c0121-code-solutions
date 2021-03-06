const express = require('express');
const data = require('./data.json');
const app = express();
app.use(express.json());
const fs = require('fs');
let dataJSON;

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for(const key in data.notes){
    notesArray.push(data.notes[key]);
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if(!(id > 0)) res.status(400).json({error: 'id must be a positive integer'});
  else if(data.notes[id]) res.status(200).json(data.notes[id]);
  else res.status(404).json({error: `note with id ${id} not found!`});
});

app.post('/api/notes', (req, res) => {
  const newEntry = req.body;
  if(!newEntry['content']) res.status(400).json({error:'content is a required field'});
  else if(newEntry['content']){
    newEntry['id'] = data.nextId;
    data.notes[data.nextId] = newEntry;
    const newEntryJSON = JSON.stringify(newEntry);
    data.nextId++;
    dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, (err) => {
      if(err) {
        res.status(500).json({error:'An unexpected error occured'});
      }else res.status(201).json(newEntry);
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if(!(id > 0)) res.status(400).json({error: 'id must be a positive integer'});
  else if(!data.notes[id]) res.status(404).json({error: `note with id ${id} not found!`});
  else if(data.notes[id]) {
    delete data.notes[id];
    dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, (err) => {
      if(err) {
        res.status(500).json({error:'An unexpected error occured'});
      }else res.status(200).send()
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if(!(id > 0)) res.status(400).json({error: 'id must be a positive integer'});
  else if(!data.notes[id]) res.status(404).json({error: `note with id ${id} not found!`});
  else if(data.notes[id]) {
    data.notes[id].content = body.content;
    dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, (err) => {
      if(err) {
        res.status(500).json({error:'An unexpected error occured'});
      }else res.status(204).send();
    });
  }
});


app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
