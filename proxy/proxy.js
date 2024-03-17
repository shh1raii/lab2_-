const express = require('express');
const axios = require('axios');
const config = require('./config');

const app = express();
const PORT = config.get('proxyPort');
const API_URL = config.get('apiUrl');

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error when executing a request to API');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening at ${PORT}`);
});

