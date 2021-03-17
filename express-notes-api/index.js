const express = require('express');
const data = require('./data.json');
const app = express();
app.use(express.json());
const fs = require('fs');

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
    writeToFile();
    res.status(201).json(newEntry);
  }else res.status(500).json({error:'An unexpected error occured'});
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if(!(id > 0)) res.status(400).json({error: 'id must be a positive integer'});
  else if(!data.notes[id]) res.status(404).json({error: `note with id ${id} not found!`});
  else if(data.notes[id]) {
    delete data.notes[id];
    writeToFile();
    res.status(204).send();
  }else res.status(500).json({error:'An unexpected error occured'});
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if(!(id > 0)) res.status(400).json({error: 'id must be a positive integer'});
  else if(!data.notes[id]) res.status(404).json({error: `note with id ${id} not found!`});
  else if(data.notes[id]) {
    data.notes[id].content = body.content;
    writeToFile();
    res.status(204).send();
  }else res.status(500).json({error:'An unexpected error occured'});
});

function writeToFile(){
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile( 'data.json', dataJSON, (err)=> {
    if(err) throw err;
    return;
  });
}

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
