const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require("express");
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error:'An unexpected error occured.'});
    });
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  if(!body.name || !body.course || !body.score){
    res.status(400).json({error:'Entry must contain a "name", "course", and "score"'});
    return;
  }
  if(body.score < 1 || body.score > 100 ){
    res.status(400).json({error:'Score must be an integer between 1-100'});
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
    returning *
  `;
  const values = [body.name, body.course, body.score];
  db.query(sql, values)
    .then( result => {
      const entry = result.rows[0];
      res.status(201).json(entry);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error:"An unexpected error occured"});
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = parseInt(req.params.gradeId, 10);
  const body = req.body;
  if(!Number.isInteger(id) || id < 1){
    res.status(400).json({error:"gradeId must be a positive integer"});
    return;
  }
  if(!body.name || !body.course || !body.score){
    res.status(400).json({error:'Entry must contain a name, course, and score'});
    return;
  }
  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
    returning *
  `;
  const values = [body.name, body.course, body.score, id];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if(!grade){
        res.status(404).json({error:"Target grade does not exist"});
      }else{
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error:"An unexpected error occured"});
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = parseInt(req.params.gradeId, 10);
  if(!Number.isInteger(id) || id < 1){
    res.status(400).json({error:"gradeId must be a positive integer"});
    return;
  }
  const sql = `
    delete from "grades"
          where "gradeId" = $1
    returning *
  `;
  const values = [id];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if(!grade){
        res.status(404).json({error:"Target grade does not exist"});
      }else{
        res.status(204).send();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error:"An unexpected error occured"});
    })
});

app.listen(3000, () => {
  console.log("listening on port 3000!")
});
