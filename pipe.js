const fs = require('fs');
const zlib = require('zlib') //파일 압축하는 모듈

const zlibStream = zlib.createGzip();//gzip방식으로 압축..

const readStream = fs.createReadStream('./readme2.txt',{highWaterMark:16});
const writeStream = fs.createWriteStream('./writeme3.txt');

readStream.pipe(writeStream);//일종의 복사..
//stream끼리는 계속 pipe할 수 있음
//readStream.pipe(writeStream).pipe().pipe()..

//압축해서 합치고싶으면
//readStream.pipe(zlibStream).pipe(writeStream)

//좀 더 최신 문법의 다른 방법..
// const readStream = fs.copyFile('./readme2.txt','./writeme3.txt',(err)=>{
// console.log(err);
// })
