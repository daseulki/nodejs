const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/post', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/comments', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/list', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.delete('/users', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.get('/', (req,res)=>{ 
  //get이나 post, delete는 특수한 경우에 작동하는 미들웨어 
  //주소가 붙으면 그 주소와 일치하는 요청만 여기에 걸림 
  res.send('Hello express')
});



module.exports = router;
