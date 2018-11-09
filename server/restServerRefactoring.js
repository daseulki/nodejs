//코드가 지저분하니까..! 걍 express쓰자!
//하지만 express를 불가피하게 사용할 수 없다면..
const http = require('http');
const fs = require('fs');

const users = {
  //우선 메모리에 담자.. 나중에는 이부분을 DB로 구현할 것..
  // 지금은 이 객체가 db역할
}

const router = {
  GET:{
    '/': (req,res) => {
      fs.readFile('./restFront.html',(err,data)=>{
        if(err){
          throw err;
        }
        res.end(data);
      })
    },
    '/users': (req,res) => {
      res.end(JSON.stringify(users));
    },
    '*': (req,res) => {
      fs.readFile(`.${req.url}`, (err, data) => {
        if (err) {
          res.writeHead(404, 'NOT FOUND');
          return res.end('NOT FOUND');
        }
        return res.end(data);
      })
    }

  },

  POST:{
    '/users': (req,res) => {
      let body = '' //조각난 chunk들을 모을 변수..
      req.on('data', (chunk) =>{
        body += chunk;
      });
      return req.on('end', ()=>{
        console.log('POST의 본문: ', body);
        const { name } = JSON.parse(body);
        const id = +new Date();//new Date().getTime();
        users[id] = name;
        res.writeHead(201, {'Content-Type': 'text/html; charset=utf8'});
        res.end('사용자 등록 성공!');
      });
    }
  },

  PATCH:{

  },

  PUT:{
    //실제로는 startsWith 처리도 해야되는데 어려워서 생략..
    //그래서 작동 안함..
    '/users': (req,res) => {
      console.log(req.url);
      const key = req.url.split('/')[2]; //request된 url을 /로 쪼개서.. 두번째에 들은거면 유저 뒤에 아이디 뭐시기겠지..
      let body = '';
      req.on('data', (chunk) =>{
        body += chunk;
      });
      return req.on('end',()=>{
        console.log('Put!! ',body);
        users[key]=JSON.parse(body).name;
        return res.end(JSON.stringify(users));//사용된 정보를 front로 보내는것..
      });
    }
  },

  DELETE:{
    '/users': (req,res) => {
      console.log(req.url);
      const key = req.url.split('/')[2];
      let body = '';
      req.on('data', (chunk) =>{
        body += chunk;
      });
      return req.on('end',()=>{
        console.log('Delete!! ',body);
        delete users[key];
        return res.end(JSON.stringify(users));
      });

    }
  }
};


const server = http.createServer((req,res)=>{
  const matchedUrl = router[req.method][req.url];
  (matchedUrl || router[req.method]['*'])(req,res);
  //default operator(||) 앞이 undefined면 뒤에 실행..
  //guard operator (&&) 앞에서부터 순차적으로 undefined인지 검사
}).listen(8085, () =>{
  console.log("8085에서 대기중")
});

server.on('error',(err)=>{
  console.error(err);
})
