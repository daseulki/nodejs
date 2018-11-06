// 암호화 모듈 (비밀번호나.. 뭐 숨기고 싶은거..)
//비밀번호는 보통 hash 방식으로
const crypto = require('crypto');

console.log('sha512로 생성한 비밀번호: ',crypto.createHash('sha512').update('비밀번호').digest('base64'));
//sha512라는 알고리즘으로.. '비밀번호'를 base64 형식으로 만들어라
//hash 형식은 복호화 불가능 --> 단방향 암호화..
//아주 우연한 경우로 다른 문자를 입력해도 같은 hash값이 나올 수 있음 (비밀번호 충돌)

//충돌을 방지하기 위해 더 어려운 방법.. pbkdf2메서드 사용하기
crypto.randomBytes(64, (err,buf)=>{
  const salt = buf.toString('base64');
  console.log('salt: ', salt);
  console.time('비번 만드는데 걸린 시간')
  crypto.pbkdf2('비밀번호', salt, 550745, 64, 'sha512', (err,key)=>{
    console.log('pbkdf2로 생성한 비밀번호: ',key.toString('base64'));
    console.timeEnd('비번 만드는데 걸린 시간')
  }); //암호키 만들때 1초 정도 나오도록 중간 정수 사이즈를 정한다
}); //콜백지옥이다! promise로 바꾸는건 util에서.. 
