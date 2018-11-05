const url = require('url');
const URL = url.URL;
const myURL = new URL('https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=101&oid=022&aid=0003315931');
//임의로 네이버 기사..

console.log('new URL(): ', myURL);
//url 객체 반환
/*
new URL():  URL {
  href: 'https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=101&oid=022&
aid=0003315931',
  origin: 'https://news.naver.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'news.naver.com',
  hostname: 'news.naver.com',
  port: '',
  pathname: '/main/read.nhn',
  search: '?mode=LSD&mid=shm&sid1=101&oid=022&aid=0003315931',
  searchParams: URLSearchParams {
  'mode' => 'LSD',
  'mid' => 'shm',
  'sid1' => '101',
  'oid' => '022',
  'aid' => '0003315931' },
  hash: '' }


*/
console.log('url.format(): ',url.format(myURL))
//url 주소??

/*
url.format():  https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=101&oid=022&aid=0003315931
*/

//노드 searchParams 메서드는 FormData나 URLSearchParams 객체에도 비슷하게 쓰임
console.log('searchParams.keys(): ', myURL.searchParams.keys());
//searchParams.keys():  URLSearchParams Iterator { 'mode', 'mid', 'sid1', 'oid', 'aid' }

console.log('searchParams.values(): ', myURL.searchParams.values());
//searchParams.values():  URLSearchParams Iterator { 'LSD', 'shm', '101', '022', '0003315931' }

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));
//[ 'es3', 'es5' ]

myURL.searchParams.append('filter','es6');
console.log(myURL.searchParams.getAll('filter'));
//[ 'es3', 'es5', 'es6' ]

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));
//[]

console.log('searchParams.toString(): ', myURL.searchParams.toString());
// searchParams.toString():  mode=LSD&mid=shm&sid1=101&oid=022&aid=0003315931

//url이 도메인이 생략된 형식(ex: /hello?page=10)이면 예전방식 (url.parse) 로 파싱해야됨 --> querystring 방식
