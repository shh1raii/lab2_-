const axios = require('axios');
const API_URL = 'http://localhost:3000'; 

const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    throw new Error('Error when executing a request to API');
  }
};

module.exports = { getData };
