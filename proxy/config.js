const dotenv = require('dotenv');
const convict = require('convict');

dotenv.config();

const config = convict({
  apiUrl: {
    doc: 'URL for API',
    format: String,
    default: 'http://localhost:3000',
    env: 'API_URL'
  },
  proxyPort: {
    doc: 'Port used by proxy',
    format: 'port',
    default: 3001,
    env: 'PROXY_PORT'
  }
});

config.validate({ allowed: 'strict' });

module.exports = config;
