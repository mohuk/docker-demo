const Memcached = require('memcached');

const config = {
  host: 'memcached',
  port: 11211
};

module.exports = new Memcached(`${config.host}:${config.port}`);
