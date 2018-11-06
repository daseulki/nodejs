const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt',{highWaterMark:16}); //스트리밍 방식으로 데이터를 16byte씩 읽겠다
const data = [];

readStream.on('data',(chunk)=>{
  data.push(chunk);
  console.log('data: ',chunk, chunk.length);
});
//

readStream.on('end: ', ()=>{
  console.log('end', Buffer.concat(data).toString());
});
//data안에 들은 chuck들을 하나로 합쳐서(concat) 사람이 읽을 수 있게(toString)..

readStream.on('error',(err)=>{
  console.log('error: ',err);
})
