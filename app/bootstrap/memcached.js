const Memcached = require('memcached');

const config = {
  host: process.env.MEMCACHED_HOST || 'memcached',
  port: process.env.MEMCACHED_PORT || 11211
};

module.exports = new Memcached(`${config.host}:${config.port}`);
