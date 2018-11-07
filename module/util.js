const util = require('util');
const crypto = require('crypto');

const dontuseme = util.deprecate((x,y)=>{
  console.log('deprecate를 사용한 함수.. ',x+y);
},"이 함수는 2018년 12월 부터 지원하지 않습니다.");
//갑자기 서비스 중단하기 전에.. deprecate 기간을 갖는다 -> 곧 중단될 메서드임을 알려줌 주로 api 제작할때 사용 

dontuseme(1,2);
//3 => 답 그대로 나오고 아래 워닝뜸
//(node:21624) DeprecationWarning: 이 함수는 2018년 12월 부터 지원하지 않습니다.

// crypto.randomBytes(64, (err,buf)=>{
//   const salt = buf.toString('base64');
//   console.log('salt: ', salt);
//   console.time('비번 만드는데 걸린 시간')
//   crypto.pbkdf2('비밀번호', salt, 550745, 64, 'sha512', (err,key)=>{
//     console.log('pbkdf2로 생성한 비밀번호: ',key.toString('base64'));
//     console.timeEnd('비번 만드는데 걸린 시간')
//   });
// });
// //randomBytes는 promise 지원안함 ㅠ

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

randomBytesPromise(64)
  .then((buf) => {
    const salt = buf.toString('base64');
    return pbkdf2Promise('비밀번호', salt, 550745, 64, 'sha512')
  })
  .then((key)=>{
    console.log('promisify로 만든 비밀번호', key.toString('base64'));
  })
  .catch((err)=>{
    console.error(err);
  });
//promise 한것도 복잡하다면 --> async로

(async () =>{
  const buf = await randomBytesPromise(64);
  const salt = buf.toString('base64');
  const key = await pbkdf2Promise('비밀번호', salt, 652455, 64, 'sha512');
  console.log('async로 만든 비밀번호', key.toString('base64'))
})();
