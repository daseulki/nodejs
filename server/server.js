const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
  //req.headers.cookie로 접근..
  res.writeHead(200, {'Set-Cookie' : 'mycookie-test'});
  //200은 성공한 요청이라는 의미..
  //서버에서 클라이언트로 보내는거..
  //요청이나 응담에는 그에대한 정보를 담고 있는 헤더가 포함되어 있음
  
  console.log('서버 실행');
  fs.readFile('./html.html',(err,data)=>{
    if(err){
      throw err;
    }
    res.end(data);
  });
  // res.write('<h1>8081 port</h1>');
  // res.write('<h2>8081 </h2>');
  // res.write('<h3>hello js</h3>');
  // res.end('hello server');
}).listen(8081);

server.on('error',(error)=>{
  console.error(error);
});
