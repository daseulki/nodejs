#!/usr/bin/env node
console.log('Hello CLI',process.argv);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const answerCallback = (answer) => {
   
    if (answer === 'y'){
        console.log('thank you!');
        rl.close();
    }else if(answer === 'n'){
        console.log('Sorry..');
        rl.close();
    }else {
        console.clear();
        console.log('input only y or n');
        rl.question('Is this good? (y/n)',answerCallback);
    }

}

rl.question('Is this good? (y/n)',answerCallback);
