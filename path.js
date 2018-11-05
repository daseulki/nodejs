const path = require('path');
console.log(path.dirname(__filename));
//C:\Users\Return\Desktop\ATOM\node

console.log(path.extname(__filename));
//.js

console.log(path.basename(__filename));
//path.js

console.log(path.normalize('C:\/Users\/ Return\Desktop\\\ATOM\node'));
//C:\Users\Return\Desktop\ATOM\node 멀쩡하게 만듦

console.log(path.isAbsolute('C:\\'));
//true

console.log(path.relative('C:\Users\Return\Desktop\ATOM\node','C:\\'));
//폴더 사이의 상대경로를 반환 ..\..\..\..\..\..

console.log(path.join(__dirname,'..','..','/ATOM','.','/map'));
//절대경로 무시하고 합침 C:\Users\Return\Desktop\ATOM\map

console.log(path.resolve(''));
//절대경로 고려하고 합침 루트=C:\
