/////////// web socket //////////////
/*

const WebSocket = require('ws');

module.exports = (server) => {
    const wss = new WebSocket.Server({ server });
  
    wss.on('connection', (ws, req) => {
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log('새로운 클라이언트 접속', ip);
      ws.on('message', (message) => {
        console.log(message);
      });
      ws.on('error', (error) => {
        console.error(error);
      });
      ws.on('close', () => {
        console.log('클라이언트 접속 해제', ip);
        clearInterval(ws.interval);
      });
      const interval = setInterval(() => {
        if (ws.readyState === ws.OPEN) {
          ws.send('서버에서 클라이언트로 메시지를 보냅니다.');
        }
      }, 3000);
      ws.interval = interval;
    });
  };

//클라이언트 => httml => 서버
//클라이언트 => ws =>서버

*/

////////////  socket IO   /////////

const socketIO = require('socket.io');

module.exports = (server) => {
   
  const io = socketIO(server, {path:'/socket.io'});
  io.on('connection',(socket) => {
    const req = socket.request;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('새로운 클라이언트 접속', ip, socket.id, req.ip);

    socket.on('reply', (data) => {
      console.log(data);

    });
    socket.on('error', (error) => {
      console.error(error);
    });

    socket.on('disconnect', () => {
      console.log();
      console.log('접속 해제', ip, socket.id, req.ip);

    });

    socket.interval = setInterval(() => {
      socket.emit('news', 'Hello Socket.IO'); //key , 값 
      socket.emit('close', 'Bye Socket.IO'); //key , 값 

    },3000)
  })
}