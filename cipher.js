//복호화 가능한 암호화
const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc','열쇠');
//크립토 공식문서에서 알맞는 알고리즘 사용하면 됨

let result = cipher.update('비밀번호','utf8','base64');
result += cipher.final('base64')// final: 비밀번호 생성을 완성하는 메서드

console.log('비밀번호: ',result);
const decipher = crypto.createDecipher('aes-256-cbc','열쇠');
// 똑같은 알고리즘, 똑같은 key 필요
//열쇠 대신 다른열쇠 넣으면 bad decrypt 에러 뜸.. 열쇠 유출되면 안됨!
 let result2 = decipher.update(result,'base64','utf8'); //순서 잘 봐야됨
 result2 += decipher.final('utf8');
 console.log('평문: ',result2);
