setInterval(() => {
  console.log('시작');
  try {
    throw new Error('서버를 고장내주마!');
  } catch (err) {
    console.error(err);
  }
}, 1000);
console.log(process.argv);
//try catch는 부득이하게 쓰는거 아니면 안쓰는게 조음..

/*
const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);


*/


/*
process.on('uncaughtException', (err) => {
 console.error('예기치 못한 에러', err);
 process.exit();
});

setInterval(() => {
 throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
 console.log('실행됩니다');
}, 2000);

//uncaughtException에 의존하지 말것..!
*/
