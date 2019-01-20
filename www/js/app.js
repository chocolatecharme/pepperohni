const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/index.html'));
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`pepperOHni listening at http://${host}:${port}`);
});


