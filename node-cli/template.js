#!/usr/bin/env node
const fs= require('fs');
const path = require('path');

const htmlTemplate = `<!DOCTYPE html>
<html>
<head>
<meta chart="utf-8">
<title>template</title>
</head>
<body>
<h1>Hello</h1>
<p> CLI </p>
</body>
</html>
`;

const routerTemplate = `const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    try{
        res.sent('ok');
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;
`

const mkdirp = (dir) => {

    const dirname = path.relative('.' , path.normalize(dir));
    dirname.forEach((d,idx) => {
        const pathBuilder = dirname.slice(0, idx+1).join(path.sep);
        
        if(!exist(pathBuilder)){
            fs.mkdirSync(pathBuilder);
        }
    })
}

const exist = () => {
    try {
        fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK );
        return true;
    }catch(err){
        return false;
    }
}

const makeTemplate = () => {

    mkdirp(directory);
    if(type === 'html'){
        const pathToFile = path.join(directory, `${name}.html`);
        if(exist(pathToFile)){
            console.error('already existed file');
        }
        else {
            fs.writeFileSync(pathToFile, htmlTemplate);
            console.log(pathToFile,'complate');
        }
    }
};



const program = () => {
    if (!type || !name ){
        console.error('cli html|express-router filename||[create route]');
    }else{
        makeTemplate();
    }
};
program();