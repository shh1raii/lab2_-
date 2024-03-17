const express = require('express');
const router = express.Router();
const apiClient = require('../Clients/apiClient');

router.get('/', async (req, res) => {
  try {
    const data = await apiClient.getData();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error when executing a request to API');
  }
});

module.exports = router;
