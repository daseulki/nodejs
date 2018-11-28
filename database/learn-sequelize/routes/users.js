var express = require('express');
var router = express.Router();
var { User } = require('../models')

/* GET users listing. */
//얘네 다 promise여서 then으로.. 성공한 경우와 실패한 경우 모두 써야함 
router.get('/', (req, res, next) => {
  User.findAll()  //db에서 다 갖고와서 배열로 .. 
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});

router.post('/', (req, res, next) => {
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
    .then((result) => { // post요청이 성공했을때는 보통 201 사용.. 
      console.log(result);
      res.status(201).json(result) //client한테 보내는 부분 
    })
    .catch((err) => {
      console.error(err);
      next(err);
    })
});

module.exports = router;
