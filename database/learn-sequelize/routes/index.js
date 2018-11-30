var express = require('express');
var router = express.Router();
const { User } = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findAll()
  .then((users) => {
    res.render('sequelize', { title: 'Sequelize' , users });
    //key랑 값이 같으면 생략 가능 (users: users => users)
  })
  .catch((err) => {
    console.error(err);
    next(err);
  })
});

module.exports = router;
