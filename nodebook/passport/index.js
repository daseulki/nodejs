const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
//로컬이랑 카카오 로그인 정책도 쓸것..

const { User } = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {    
    //세션이 사용자 정보 다 들고있으면 무거우니까.. id만 보관
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    //들고있던 id를 완전한 유저정보로 다시 복구하는 것 
    User.find({ where: { id } })
    .then(user => done(null, user))
    .catch(err => done(err));
  });
/* deserializeUser */
    // 매 요청시마다 passport.session()에서 실행
    // user.id를 db조회 후에 req.user로보냄 
    // 모든 요청(새로고침 포함)에서 실행되기 때문에 db조회를 캐싱해서 효율적이게 만들어야함 

  local(passport);
  kakao(passport);
};
