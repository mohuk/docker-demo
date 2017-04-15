const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.all({raw: true})
    .then((users) => {
      res.render('index', {title: users[0].firstName})
    });
});

module.exports = router;
