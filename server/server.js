const fs = require('fs');
const http = require('http');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    //쿠키 문자열을 ;으로 쪼갠다
    .map(v => v.split('='))
    //쪼갠 문자열을 = 으로 한번 더 쪼갠다
    .map(([k, ...vs]) => [k, vs.join('=')])
    //키와 나머지 밸류들로 구분
    .reduce((acc,[k, v]) => {
    //배열을 객체로 바꾼다!
      acc[k.trim()] = decodeURIComponent(v)
      return acc;
    },{});


const server = http.createServer((req,res)=>{
  //req.headers.cookie로 접근..
  console.log(req.headers.cookie);
  res.writeHead(200, {'Set-Cookie' : 'mycookie=test'});
  //200은 성공한 요청이라는 의미..
  //서버에서 클라이언트로 데이터를 보내는거..
  //요청이나 응답에는 그에 대한 정보를 담고 있는 헤더가 포함되어 있음


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
