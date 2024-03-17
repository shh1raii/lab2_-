require('dotenv').config(); 

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const responseText = process.env.RESPONSE_TEXT || 'Hello World'; 
  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
