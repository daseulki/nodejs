const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require( '../models');

const router = express.Router();

router.post('/join' , async (req,res,next)=> {
    const {email, nick, password} = req.body;
    try{   
        const exUser = await User.find({ where : { email }});
        if(exUser){
            req.flash('joinError', 'already signed in');
            return res.redirect('/join');
        }
        const hash = await bcrypt.hash(password, 12); //너무 길어도 부하..
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    }catch(err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;