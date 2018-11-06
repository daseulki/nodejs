const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', ()=>{
  console.log('파일 쓰기 완료');
})

writeStream.write('글 쓰기 시작~ ');
writeStream.write('글 쓰기 끝~');
//쓰고싶은 만큼..

writeStream.end();
