const http = require('http');
const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster){//관리자의 경우
  console.log('마스터아이디: ',process.pid);
  for(let i of os.cpus()){
    cluster.fork();
  }
  cluster.on('exit',(worker,code,signal)=>{
    //worker가 일 많이하다가 죽어버리면.. exit 이벤트 발생
    console.log(worker.process.pid, '워커가 죽었따ㅜ');
    cluster.fork();
  });
}else{//worker인 경우..
  http.createServer((req,res)=>{
    res.end('http sever');
  }).listen(8080);
  console.log(process.pid, '워커 실행')
}
