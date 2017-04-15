const memcached = require('./bootstrap/memcached');
const debug = require('debug');
const d = debug('docker-demo:cache')

memcached.add('users', [{
  firstName: 'Johnny',
  lastName: 'Bravo'
}], 86400, function (err) {
  if(!err){
    d('cache built');
  }
});
