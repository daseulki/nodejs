const fs = require('fs')
const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    fs.readdir('./data', (error,filelist)=>{
        let title = 'Welcome';
        let description = 'Hello, Node.js';
        let list = template.list(filelist);
        let html = template.HTML(title,list,`<h2>${title}</h2>`,`<a href="/create">create</a>`);
        response.send(html);
    });
});

app.get('/page', (req,res)=>{
    return res.send('/page');
})

app.listen(3000, () => console.log('hello world on port 3000'));
