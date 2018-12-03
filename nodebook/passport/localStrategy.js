const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const {User} = require('../models');
module.exports = (passport) => {
    passport.use(new LocalStrategy({
        usernameField: 'email', //req.body.email
        passwordField: 'password' //req.body.password
    }, async (email, password, done)=>{ //done(에러, 성공, 실패)
        try{
            const exUser = await User.find({where: {email}});
            if(exUser){
                const result = await bcrypt.compare(password, exUser.password)
                if(result){

                }else{
                    done(null,false,{message: 'wrong password. check your password'})
                }
            }else{
                done(null,false,{message: 'unknown email. check your email'});
            }
        }
        catch(err){
            console.err(err);
            done(err);
            //done(서버에러), done(null,사용자정보), done(null,false,실패정보)
        }
    }));
}
//urlencodede미들웨어가 해석한 req.body의 값들을 usernameField, passField에 연결


