const fs = require('fs');
const http = require('http');
const url = require('url');
const qs = require('querystring')

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};

const server = http.createServer((req,res) => {
  const cookies = parseCookies(req.headers.cookie);
//  console.log(req.url, parseCookies(req.headers.cookie));
  const expires = new Date();
  expires.setMinutes(expires.getMinutes()+5)

  if(req.url.startsWith('/login')){
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const randomInt = +new Date();
    session[randomInt] = {
      name,
      expires,
    }

    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    }); //;얘로 쿠키 설정 구분..
    res.end();
  }
  else if (cookies.session && session[cookies.session] && session[cookies.session].expires > new Date()) {
    //쿠키 설정이 있으면 바로 화면 띄움..
    //세션 아이디의 유효기간 체크 ㅁ
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`${session[cookies.session].name}님 방가방가`);
  }
  else {
    fs.readFile('./form.html',(err,data)=>{
      res.end(data)
    });
  }
  //res.writeHead(200,{'Set-Cookie' : 'mycookie=test'})
  //res.end('Hello Cookie');
//쿠키가 사용자를 추적한다?
}).listen(8083);

server.on('listening',()=>{
  console.log('8083 서버대기중...');
})
