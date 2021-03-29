const express = require('express');
const path = require('path');
const app = express();

const joinedPaths = path.join(__dirname, 'public');
console.log(joinedPaths);

const staticFiles = express.static('public');

app.use(staticFiles);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
