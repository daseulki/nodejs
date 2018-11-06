const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.addListener('방문', ()=>{
  console.log('방문해주셔서 감사');
});
myEvent.on('종료', ()=>{
  console.log('잘가요');
})
myEvent.on('종료', ()=>{
  console.log('좀 가요');
})
//여러개 달 수 있음

myEvent.once('특별한이벤트',()=>{
  console.log('여러번 등록해도 한번만 실행됨..!');
})
myEvent.emit('방문');
myEvent.emit('종료');
myEvent.emit('특별한이벤트');
myEvent.emit('특별한이벤트');
//한번만 실행됨..

myEvent.on('지워질이벤트',()=>{
  console.log('어차피 콘솔에 안찍힐 내용..');
})
myEvent.removeAllListeners('지워질이벤트');
myEvent.emit('지워질이벤트');
//리스너지워서 콘솔에 안찍힘
//하나의 이벤트에 여러 리스너를 전부 해지하고 싶을때 사용

const listener = () => {
  console.log('리스너 함수 만들었다');
};

myEvent.on('리스너이벤트', listener);
myEvent.removeListener('리스너이벤트', listener);
myEvent.emit('리스너이벤트');
//지우고 싶은 이벤트는 변수에 담아서 그것만 제거할수 있음

console.log(myEvent.listenerCount('종료'));
//종료라는 이벤트에 몇개 리스너가 붙었는지 세는 거..
