//url parsing이랑 같이 씀

const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=101&oid=022&aid=0003315931');
const query = querystring.parse(parseUrl.query);

console.log('querystring.parse(): ', query);
//searchParams와 같은 결과.. 기능은 searchParams이 더 많음

console.log('querystring.stringify(): ', querystring.stringify(query));
//myURL.searchParams.toString()
