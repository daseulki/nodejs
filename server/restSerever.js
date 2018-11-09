const http = require('http');
const fs = require('fs');

const users = {
  //우선 메모리에 담자.. 나중에는 이부분을 DB로 구현할 것..
  // 지금은 이 객체가 db역할
}

http.createServer((req,res)=>{
  if(req.method === 'GET'){

    if(req.url === '/'){
      console.log('GET방식이다!');
      return fs.readFile('./restFront.html',(err,data)=>{
        if(err){
          throw err;
        }
        res.end(data);
      })
    }else if(req.url === '/users'){
        return res.end(JSON.stringify(users));
        //객체는 버퍼로 보내고 못읽어서 JSON으로 스트링으로 만들어서 보냄
    }
    return fs.readFile(`.${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404, 'NOT FOUND');
        return res.end('NOT FOUND');
      }
      return res.end(data);
    });//주소가 /아니고 /users도 아닐때 여기 걸림

  }else if(req.method === 'POST'){
    if(req.url === '/'){

    }else if(req.url === '/users'){
      //이벤트 리스너로 데이터 받기...
      //데이터가 ajax로 요청을 보내면 분몬 데이터가 stream 형식으로 들어옴
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
  }else if(req.method === 'PATCH'){
    if(req.url === '/'){

    }else if(req.url === '/users'){

    }
  }else if(req.method === 'PUT'){//수정
    if(req.url === '/'){
    }else if(req.url.startsWith('/users/')){
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
  }else if(req.method === 'DELETE'){
    if(req.url === '/'){

    }else if(req.url.startsWith('/users/')){
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


}).listen(8085, () =>{
  console.log("8085에서 대기중")
})
