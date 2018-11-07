const fs = require('fs');

//자바스크립트는 파일 접근 못하지만.. 노드는 가능
fs.readFile('./readme.txt','utf8',(err,data)=>{
  if(err){
    throw err;
  }
  console.log(data); //utf8 안하면 버퍼가 나와버림
});
//readFile은 비동기지만.. sync 함수 지원함
//보통은 걍 readFile에 콜백으로 동기처럼 구동시킴

/*
fs.readFileSync('');
한 두번 쓸때만 싱크메서드 사용할 것..
blocking 많이 일어나면 서버가 딴거 못해서 싫어함
*/

 fs.writeFile('./writeme.txt','방금 새로 작성한 파일..',(err)=>{
   if(err){
     throw err;
   }
   fs.readFile('./writeme.txt',(err,data)=>{
     if(err){
       throw err;
     }
     console.log(data.toString());
   })
 })
//계속 덮어쓰네
