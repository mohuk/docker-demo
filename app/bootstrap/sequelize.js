const Sequelize = require('sequelize');

const dbConfig = {
  name: process.env.POSTGRES_DB || 'demodb',
  user: process.env.POSTGRES_USER || 'demo',
  pass: process.env.POSTGRES_PASS || 'demo',
  host: process.env.POSTGRES_HOST || 'postgres',
  port: process.env.POSTGRES_PORT || '5432'
};

const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.pass, {
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
