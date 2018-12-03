const express = require('express');
const router = express.Router();

router.get('/profile', (req,res, next) => {
    res.render('profile', {title: '내 정보 - Nodebook', user: null});
});

router.get('/join', (req,res, next) => {
    res.render('join', {
        title: '회원가입 - Nodebook',
        user: null,
        joinError: req.flash('joinError')
    })
});

router.get('/', (req,res, next) => {
    res.render('main', {
        title: 'Nodebook',
        twits: [],
        user: null,
        loginError: req.flash('loginError')
    })
});

module.exports = router;