const express = require('express');
const router = express.Router();
const User = require('../models/user');
const memcached = require('../bootstrap/memcached');

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.all({raw: true})
    .then((users) => {
      res.render('index', {title: users[0].lastName})
    });
});

router.get('/cached', (req, res, next) => {
  memcached.get('users', (err, users) => {
    if(!err) {
      res.render('index', {title: users[0].lastName})
    }
  })
});

module.exports = router;
