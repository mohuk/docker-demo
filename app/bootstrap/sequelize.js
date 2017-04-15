const Sequelize = require('sequelize');


const dbConfig = {
  name: 'demodb',
  user: 'demo',
  pass: 'demo',
  host: 'postgres',
  port: '5432'
};
const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
