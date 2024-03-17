const express = require('express');
const path = require('path');
const routes = require(path.join(__dirname, '../Routes'));

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
