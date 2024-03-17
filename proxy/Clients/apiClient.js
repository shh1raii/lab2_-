const apiService = require('../Services/apiService');

const getData = async () => {
  try {
    return await apiService.getData();
  } catch (error) {
    throw error;
  }
};

module.exports = { getData };
